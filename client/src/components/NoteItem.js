import { useSelector } from 'react-redux';

function NoteItem({ note }) {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='note'>
            <h4>Note from {user.name}</h4>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString('en-US')}</p>
        </div>
    );
}

export default NoteItem;