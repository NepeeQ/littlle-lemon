import Nav from './Nav';
import logo from "../images/Logo.svg"


function Header()
{
   return (
   <header>
    <img src={logo}></img>
    <Nav></Nav>
   </header>
   );
}

export default Header;
