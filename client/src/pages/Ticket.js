import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import { getNotes, createNote } from '../features/notes/noteSlice';
import NoteItem from '../components/NoteItem';

const customStyles = {
    content: {
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative'
    }
};


Modal.setAppElement('#root');

function Ticket() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [noteText, setNoteText] = useState('');
    const { ticket, isLoading, isError, message } = useSelector((state) => state.tickets);
    const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ticketId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(getTicket(ticketId));
        dispatch(getNotes(ticketId));
        // eslint-disable-next-line
    }, [isError, message, ticketId]);

    if (isLoading || notesIsLoading) {
        return <h3>Loading...</h3>;
    }

    if (isError) {
        return <h3>Something went wrong</h3>;
    }

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId));
        toast.success('Ticket Closed');
        navigate('/tickets');
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const onNoteSubmit = (e) => {
        e.preventDefault();

        dispatch(createNote({ noteText, ticketId }));

        closeModal();
    };

    return (
        <section className='ticket'>
            <div className='ticket-wrapper'>
                <h3>Ticket ID: {ticket._id}</h3>
                <p className={`${ticket.status === 'closed' ? 'status-closed' : 'status-new'}`}>{ticket.status}</p>
                <h3>Product:</h3>
                <p>{ticket.product}</p>
                <h3>Date Submitetted:</h3>
                <p>{new Date(ticket.createdAt).toLocaleString('en-US')}</p>
                <h3>Description of the issue</h3>
                <p>{ticket.description}</p>
            </div>
            <hr />

            <h3>Notes</h3>
            {ticket.status !== 'closed' && (
                <button
                    className='btn btn-secondary'
                    onClick={openModal}
                >
                    Add Note
                </button>
            )}

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Add Note' >
                <h2>Add Note</h2>
                <button onClick={closeModal}>X</button>

                <form onSubmit={onNoteSubmit}>
                    <div>
                        <textarea
                            name='noteText'
                            id='noteText'
                            placeholder='Note text'
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button className='btn btn-secondary'>Submit</button>
                </form>
            </Modal>

            {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
            ))}
            <div>
                {ticket.status !== 'closed' && (
                    <button className='btn btn-secondary' onClick={onTicketClose}>Close Ticket</button>
                )}
            </div>


        </section>
    );
}

export default Ticket;