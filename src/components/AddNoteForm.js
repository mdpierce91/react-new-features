import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
	const { notesDispatch } = useContext(NotesContext);
	const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
	const titleChanged = (e) => {
		setTitle(e.target.value);
	}

	const bodyChanged = (e) => {
		setBody(e.target.value);
	}
	
	const addNote = (e) => {
		e.preventDefault();
		notesDispatch({type: 'ADD_NOTE', title, body });
		setTitle('');
		setBody('');
	}

    return (
		<>
			<p>Add Note</p>
			<form onSubmit={addNote}>
				<input value={title} onChange={titleChanged}/>
				<textarea value={body} onChange={bodyChanged}/>
				<button type="submit">add note</button>
			</form>
		</>
    );
}

export { AddNoteForm as default };