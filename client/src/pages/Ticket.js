import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import { getNotes } from '../features/notes/noteSlice';
import NoteItem from '../components/NoteItem';


function Ticket() {
    const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);
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

    return (
        <div>
            <h3>Ticket ID: {ticket._id}</h3>
            <p>{ticket.status}</p>
            <h3>Product:</h3>
            <p>{ticket.product}</p>
            <h3>Date Submitetted:</h3>
            <p>{new Date(ticket.createdAt).toLocaleString('en-US')}</p>
            <h3>Description of the issue</h3>
            <p>{ticket.description}</p>
            <hr />
            <h3>Notes</h3>
            {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
            ))}
            <div>
                {ticket.status !== 'closed' && (
                    <button onClick={onTicketClose}>Close Ticket</button>
                )}
            </div>


        </div>
    );
}

export default Ticket;