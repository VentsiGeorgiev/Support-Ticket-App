import { useSelector } from 'react-redux';

function NoteItem({ note }) {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <h4>Note from {user.name}</h4>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString('en-US')}</p>
        </>
    );
}

export default NoteItem;