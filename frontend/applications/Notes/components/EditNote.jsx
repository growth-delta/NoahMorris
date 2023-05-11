import React from 'react';
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

export function EditNote ({ onSubmit, onAddTag, availableTags }) {
    const note = useNote();

    return (
        <div>
            <div>
                <h1 className="p4">Edit Notes</h1>
            </div>
            <NoteForm
                title={note.title}
                markdown={note.markdown}
                tags={note.tags}
                onSubmit={(data) => onSubmit(note.id, data)}
                onAddTag={onAddTag}
                availableTags={availableTags}
            />
        </div>
    );
};
