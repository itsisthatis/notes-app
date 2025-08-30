import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/axiosInstance';
import { setNotes } from '../redux/notesSlice';

export default function Home() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    api.get('/api/notes/').then((res) => {
      dispatch(setNotes(res.data));
    });
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Notes</h1>
      <ul className="mt-4">
        {notes.map((note) => (
          <li key={note.note_id} className="border-b py-2">
            <h2 className="font-semibold">{note.note_title}</h2>
            <p>{note.note_content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
