import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TicketItem from '../components/TicketItem';
import { getTickets, reset } from '../features/tickets/ticketSlice';

function Tickets() {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets());

        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <h1>My Tickets</h1>
            <section>
                {tickets.map((ticket) => (
                    <TicketItem key={ticket._id} ticket={ticket} />
                ))}
            </section>
        </>
    );
}

export default Tickets;