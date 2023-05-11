import React from 'react';
import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";


function NewNote ({ onSubmit, onAddTag, availableTags }) {
    return (
        <div>
            <div>
                <h1 className="p4">New Notes</h1>
            </div>
            <NoteForm 
                onSubmit={onSubmit} 
                onAddTag={onAddTag} 
                availableTags={availableTags} 
            />
        </div>
    );
};

export { NewNote };
