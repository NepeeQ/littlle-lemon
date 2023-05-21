import "./CallToAction.css"
import restaurantPic from "./../images/restauranfood.jpg"
import Button from "./Button";
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
                    <Button text="Reserve a Table"/>
                </div>
                <img src={restaurantPic}></img>
            </div>
        </div>
    )
}

export default CallToAction;