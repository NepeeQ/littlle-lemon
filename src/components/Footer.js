import logo from "../images/Logo.svg"
function Footer()
{
    return(
        <footer>
            <div className="wrapper" style={{padding:"20px" , display: "grid", gridTemplateColumns: "1fr 1fr", alignItems:"center"}}>
                <img src={logo} alt="Little lemon logo"></img>
                <p style={{textAlign:"right"}}>&copy; Little Lemon Restaurant</p>
            </div>
        </footer>
    )
}

export default Footer;