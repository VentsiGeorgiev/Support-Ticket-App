import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repass: '',
    });

    const { name, email, password, repass } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== repass) {
            toast.error('Passwords do not match!');
        } else {
            const userData = {
                name,
                email,
                password
            };
            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <section className='container'>
            <section className='title'>
                <h1>Register</h1>
                <p>Please create an account</p>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div className='form__input'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className='form__input'>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className='form__input'>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className='form__input'>
                        <input
                            type="password"
                            id="repass"
                            name="repass"
                            value={repass}
                            onChange={onChange}
                            placeholder="Confirm password"
                            required
                        />
                    </div>

                    <button className='btn btn-primary'>Submit</button>

                </form>
            </section>
        </section>
    );
}

export default Register;
