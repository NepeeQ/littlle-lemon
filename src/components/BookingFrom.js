//import {useState} from "react"
//import {useForm} from "react-hook-form"
//import * as yup from 'yup'
//import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from "react";



function BookingForm(props)
{
    //console.log(props.availableTimes.availableTimes)
    const [formData, setFormData] = useState({
        resDate:"",
        resTime:"",
        guests:"",
        occasion:""
    })
    /*
    const schema = yup.object().shape({
        guests: yup.number().positive().integer().min(1).max(10).required()
    });

    const {register, handleSubmit, formState: {errors}} =  useForm(
        {
            resolver: yupResolver(schema)
        }
    );
        */
    const handleChange = (e) =>
    {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.dispatch({type: "time_selected", selectedTime: formData.resTime})
        //console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="resDate">Choose date</label>
            <input onChange={handleChange} type="date" id="resDate" name="resDate" />
            <label htmlFor="resTime">Choose time</label>
            <select onChange={handleChange} id="resTime" name="resTime">
                {props.availableTimes.availableTimes.map((hour)=>
                {
                    return <option key={hour}>{hour}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input onChange={handleChange} type="number" placeholder="1" min="1" max="10" id="guests" name="guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select onChange={handleChange} id="occasion" name="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
     </form>
    )
}

export default BookingForm;