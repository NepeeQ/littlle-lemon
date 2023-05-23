import { useState,useEffect } from 'react';
import { useReducer } from 'react';
import BookingForm from './BookingFrom';
import { useNavigate } from "react-router-dom";
import {fetchAPI, submitAPI} from "./API"

function BookingPage(props)
{   const date = new Date();
    const intializeTimes = () =>
    {
        return fetchAPI(date)
    }
    function updateTimes(state, date)
    {
        return fetchAPI(new Date(date));
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], intializeTimes);
    const navigate = useNavigate()
    const submitData = (formData) =>{
        const apiRes = submitAPI(formData);
        if (apiRes){
            navigate("/Confirmation")
        }
    }
    return(
         <div>
            <h1>Reservation</h1>
            <BookingForm availableTimes={availableTimes}
            dispatch={dispatch}
            submitData={submitData}/>
         </div>
    )
}


export default BookingPage;