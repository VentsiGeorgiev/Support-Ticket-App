import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
        <div>Tickets</div>
    );
}

export default Tickets;