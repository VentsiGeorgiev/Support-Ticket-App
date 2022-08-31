import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket() {
    const { user } = useSelector((state) => state.auth);
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section>
                <h1>Create New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section>
                <div>
                    <label>Customer Name
                        <input type='text' value={user.name} disabled />
                    </label>
                </div>
                <div>
                    <label>Customer Email
                        <input type='text' value={user.email} disabled />
                    </label>
                </div>

                <form onSubmit={onSubmit}>
                    <div>
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
                    <div>
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
                        <button>Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default NewTicket;