import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo"></div>
            <Link to="/">Customer Support</Link>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/login">
                            <FaSignInAlt />
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <FaUser />
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
