import { useState,useEffect } from 'react';
import { useReducer } from 'react';
import BookingForm from './BookingFrom';

function BookingPage(props)
{   const date = new Date();
    const intializeTimes = () =>
    {
        return window.fetchAPI(date)
    }
    function updateTimes(state, date)
    {
        return window.fetchAPI(new Date(date));
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], intializeTimes);

    
    return(
         <div>
            <h1>Reservation</h1>
            <BookingForm availableTimes={availableTimes}
            dispatch={dispatch} />
         </div>
    )
}


export default BookingPage;