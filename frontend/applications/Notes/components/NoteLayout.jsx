import React from 'react';
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "../App";

export function NoteLayout({ notes }) {
    const { id } = useParams();
    const note = notes.find((n) => n.id === id);
    
    if (note == null) return <Navigate to="/notes" replace />;
    return <Outlet context={note} />;
};

export function useNote() {
    return useOutletContext();
};