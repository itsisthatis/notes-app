import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes: (state, action) => action.payload,
    addNote: (state, action) => [...state, action.payload],
    updateNote: (state, action) =>
      state.map(note => note.id === action.payload.id ? action.payload : note),
    deleteNote: (state, action) =>
      state.filter(note => note.id !== action.payload),
  },
});

export const { setNotes, addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
