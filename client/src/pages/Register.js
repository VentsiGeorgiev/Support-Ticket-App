import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repassword: '',
    });

    const { name, email, password, repass } = formData;

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
        }
    };

    return (
        <>
            <section>
                <h1>Register</h1>
                <p>Please create an account</p>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div>
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
                    <div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your password"
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
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={repass}
                            onChange={onChange}
                            placeholder="Confirm password"
                            required
                        />
                    </div>

                    <button>Submit</button>

                </form>
            </section>
        </>
    );
}

export default Register;
