import { Link } from "react-router-dom";
function Nav()
{
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="Home">Home</Link>
                </li>
                <li>
                    <Link to="About">About</Link>
                </li>
                <a href="#">
                    <li>
                        Menu
                    </li>
                </a>
                <li>
                    <Link to="/Reservations">Reservations</Link>
                </li>
                <a href="#">
                    <li>
                        Order Online
                    </li>
                </a>
                <a href="#">
                    <li>
                        Login
                    </li>
                </a>
            </ul>
        </nav>
    );
}

export default Nav;