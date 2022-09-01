import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicket, reset, closeTicket } from '../features/tickets/ticketSlice';
import { toast } from 'react-toastify';


function Ticket() {
    const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ticketId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(getTicket(ticketId));
        // eslint-disable-next-line
    }, [isError, message, ticketId]);

    if (isLoading) {
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
            <div>
                {ticket.status !== 'closed' && (
                    <button onClick={onTicketClose}>Close Ticket</button>
                )}
            </div>

        </div>
    );
}

export default Ticket;