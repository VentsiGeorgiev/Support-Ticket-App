import { Link } from 'react-router-dom';

function TicketItem({ ticket }) {
    return (
        <div className='ticket'>
            <p>Date: {new Date(ticket.createdAt).toLocaleString('en-US')}</p>
            <h3>Product: {ticket.product}</h3>
            <h3 className={`${ticket.status === 'closed' ? 'status-closed' : 'status-new'}`}>Status: {ticket.status}</h3>
            <Link className='btn btn-secondary' to={`/ticket/${ticket._id}`} >View</Link>
        </div>
    );
}

export default TicketItem;