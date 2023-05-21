import BookingForm from "./BookingFrom";
function BookingPage(props)
{
    return(
        <>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
        </>
    )
}

export default BookingPage;