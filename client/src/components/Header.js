import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const OnLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <section className='container'>
            <header className='header'>
                <div>
                    <Link className='logo' to="/">Customer Support</Link>
                </div>

                <ul className="header__navigation">
                    {user
                        ? (
                            <>
                                <li className='header__navigation__link'>
                                    <button className='btn btn-primary' onClick={OnLogout}> <FaSignOutAlt /> Logout</button>
                                </li>
                            </>)
                        : (
                            <>
                                <li>
                                    <Link className='header__navigation__link' to="/login">
                                        <FaSignInAlt className='icon' />
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className='header__navigation__link' to="/register">
                                        <FaUser className='icon' />
                                        Register
                                    </Link>
                                </li>
                            </>)}

                </ul>

            </header>
        </section >
    );
}

export default Header;
