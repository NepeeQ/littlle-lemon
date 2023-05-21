import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import { useState } from 'react';
import { useReducer } from 'react';


function Main(){
/*
    const [availableTimes, setAvailableTimes] = useState([
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);
    */
    const intializeTimes = () =>
    {
        return {availableTimes:["16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"]}
    }
    function updateTimes(state, action)
    {
        if (action.type === "time_selected")
        {
            const index = state.availableTimes.indexOf(action.selectedTime);
            if (index != -1)
            {
                state.availableTimes.splice(index, 1)
            }
            return {
                availableTimes: state.availableTimes
            }
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, intializeTimes());

    return(
         <Routes>
            <Route path="*" element={<Homepage/>} />
            <Route path="/About" element={<Chicago/>}/>
            <Route path="/Reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}/>
         </Routes>
    )
}

export default Main;