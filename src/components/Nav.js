import { Link } from "react-router-dom";
function Nav()
{
    return (
        <nav>
            <ul>
                <li>
                    <Link to ="*">Home</Link>
                </li>
                <li>
                    <Link to ="About">About</Link>
                </li>
                <a href="#">
                    <li>
                        Menu
                    </li>
                </a>
                <a href="#">
                    <li>
                        Reservations
                    </li>
                </a>
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