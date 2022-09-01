import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';

function NewTicket() {
    const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            dispatch(reset);
            navigate('/tickets');
        }

        dispatch(reset());
    }, [isError, isSuccess, dispatch, navigate, message]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createTicket({ product, description }));
    };

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <section className='container'>
            <section>
                <h1>Create New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section>
                <div className='form__input'>
                    <label>Customer Name
                        <input type='text' value={user.name} disabled />
                    </label>
                </div>
                <div className='form__input'>
                    <label>Customer Email
                        <input type='text' value={user.email} disabled />
                    </label>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='form__input'>
                        <label htmlFor='product'>Product</label>
                        <select
                            name='product'
                            id='product'
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        >
                            <option value="Computing">Computing</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Phones">Phones</option>
                            <option value="Smart Tech">Smart Tech</option>
                        </select>
                    </div>
                    <div className='form__input'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            name='description'
                            id='description'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >

                        </textarea>
                    </div>

                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default NewTicket;