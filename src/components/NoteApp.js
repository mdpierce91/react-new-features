import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = (props) => {
	const [notes, notesDispatch] = useReducer(notesReducer, []);

	useEffect(() => {
		console.log('localstorage -> notes');
		const notesData = JSON.parse(localStorage.getItem('notes'));

		if (notesData){
			notesDispatch({ type: 'POPULATE_NOTES', notes: notesData});
		}
	}, [])

	useEffect(() => {
		console.log('notes -> localstorage');
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	return (
		<NotesContext.Provider value={{ notes, notesDispatch }}>
            <h1>Notes</h1>
			<NoteList/>
			<AddNoteForm/>
		</NotesContext.Provider>
	)
}

export { NoteApp as default };