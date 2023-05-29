import "./Card.css"
function Card(props)
{
    const meal = props.meal;
    return(
        <div className="mealCard">
            <img src={meal.image} alt={meal.name}></img>
            <div className="mealCardHeader">
                <h3>{meal.name}</h3>
                <p>{meal.price}</p>
            </div>
            <p>{meal.description}</p>
            <p></p>
        </div>
    )
}

export default Card;