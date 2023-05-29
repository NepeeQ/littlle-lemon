import "./CallToAction.css"
import restaurantPic from "./../images/restauranfood.jpg"
import Button from "./Button";
import { Link } from "react-router-dom";
function CallToAction()
{
    return(
        <div className="heroBackground">
            <div className="hero wrapper">
                <div className="heroText">
                    <div>
                        <h1 style={{margin:0}}>Little Lemon</h1>
                        <h2 style={{color:"white", margin:0}}>Chicago</h2>
                    </div>
                    <p style={{color:"white"}}>We are a family owned Mediterrenean restaurant, focused on traditional recipies served with a modern twist.</p>
                    <Link to="/Reservations"><Button aria-label="On Click" text="Reserve a Table"/></Link>
                </div>
                <img src={restaurantPic}></img>
            </div>
        </div>
    )
}

export default CallToAction;