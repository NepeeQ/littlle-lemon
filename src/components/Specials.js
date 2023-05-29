import Card from "./Card";
import bruschetta from "../images/bruchetta.svg"
import greekSalad from "../images/greek salad.jpg"
import lemonDessert from "../images/lemon dessert.jpg"
import "./Specials.css"

const meals = [
    {
        name: "Greek Salad",
        image: greekSalad,
        description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99"
    },
    {
        name: "Bruschetta",
        image: bruschetta,
        description: "Out Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price:"$5.99"
    },
    {
        name:"Lemon Dessert",
        image: lemonDessert,
        description: "This comes straight from grandma's recipie book, every last ingridient has been sourced and is as authentic as can be imagined.",
        price: "$5.00"
    }
];

function Specials()
{
    return(
        <section>
            <div className="wrapper">
                <h1>This Weeks Specials!</h1>
                <div className="cardsGrid">
                    {meals.map((meal) => {
                    return <Card meal={meal} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Specials;