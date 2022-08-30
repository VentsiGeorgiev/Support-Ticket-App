import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        };

        dispatch(login(userData));

    };

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
            <section>
                <h1>Login</h1>
                <p>Please log in to get support</p>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div>
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
                    <div>
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
                    <button>Submit</button>

                </form>
            </section>
        </>
    );
}

export default Login;