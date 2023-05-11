import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidV4 } from 'uuid';
import { Routes, Route, Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./components/useLocalStorage";
import { NoteList } from "./components/NoteList";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./components/Note";
import { EditNote } from "./components/EditNote";

function App() {
  const [notes, setNotes] = useLocalStorage("NOTES", []);
  const [tags, setTags] = useLocalStorage("TAGS", []);

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);
  
  function onCreateNote({tags, ...data}) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }
      ];
    });
  }
  
  function onUpdateNote(id, { tags, ...data }) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  function onDeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id);
    });
  }
  
  function addTag(tag) {
    setTags(prev => [...prev, tag]);
  }
  
  function updateTag(id, label) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }
  
  function deleteTag(id) {
    setTags(prevTags => {
      return prevTags.filter(note => note.id !== id);
    });
  }
  
  return (
    <Container className="p-4">
      <Routes>
        <Route path="/notes" element={<NoteList notes={noteWithTags} availableTags={tags} onUpdateTag={updateTag} onDeleteTag={deleteTag} />} />
        <Route path="/new" element={<NewNote
          onSubmit={onCreateNote}
          onAddTag={addTag}
          availableTags={tags}
          updateTag={updateTag}
          deleteTag={deleteTag}
        />} />
        <Route path="/:id" element={<NoteLayout notes={noteWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route path="edit" element={<EditNote
            onSubmit={onUpdateNote}
            onAddTag={addTag}
            availableTags={tags}
          />} />
          </Route>
          <Route path="*" element={<Navigate to="/notes" />} />
      </Routes>
    </Container>
  );
}

export default App;
