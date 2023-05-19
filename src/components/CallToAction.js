import "./CallToAction.css"
import restaurantPic from "./../images/restauranfood.jpg"
function CallToAction()
{
    return(
        <div className="hero">
            <div className="wrapper">
                <div>
                    <h1 style={{margin:0}}>Little Lemon</h1>
                    <h2 style={{color:"white", margin:0}}>Chicago</h2>
                </div>
                <img src={restaurantPic}></img>
            </div>
        </div>
    )
}

export default CallToAction;