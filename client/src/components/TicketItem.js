import { Link } from 'react-router-dom';

function TicketItem({ ticket }) {
    return (
        <div>
            <p>Date: {new Date(ticket.createdAt).toLocaleString('en-US')}</p>
            <h3>Product: {ticket.product}</h3>
            <h3>Status: {ticket.status}</h3>
            <Link to={`/ticket/${ticket._id}`} >View</Link>
        </div>
    );
}

export default TicketItem;