import { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

    };

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