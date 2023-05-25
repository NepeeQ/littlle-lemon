//import {useState} from "react"
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState} from "react";
import ErrorMessage from "./ErrorMessage";



function BookingForm(props)
{
    const dispatch = props.dispatch;
    const submitData = props.submitData;
    const availableTimes = props.availableTimes;
    const schema = yup.object().shape({
        resDate: yup.date().required(),
        resTime: yup.string().required(),
        guests: yup.number().positive().integer().min(1).max(10).required()
    })
    const {trigger, setValue, formState: {errors}, handleSubmit} = useForm(
        {
            resolver: yupResolver(schema)
        }
    );
    const [formData, setFormData] = useState({
        resDate:"",
        resTime:"",
        guests:"",
        occasion:""
    })

    const handleChange = (e) =>
    {
            setFormData({...formData, [e.target.name] : e.target.value})
            if(e.target.name === "resDate")
            {
                dispatch(e.target.value);
            }
            setValue(e.target.name, e.target.value)
            trigger(e.target.name);
            console.log(errors)
            console.log(formData)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        submitData(formData);
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit(handleOnSubmit)} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="resDate">Choose date</label>
            <input onChange={handleChange} type="date" id="resDate" name="resDate" />
            <ErrorMessage errorCheck={errors["resDate"]}/>
            <label htmlFor="resTime">Choose time</label>
            <select onChange={handleChange} id="resTime" name="resTime">
                {availableTimes.map((hour)=>
                {
                    return <option data-testid="booking-time" key={hour}>{hour}</option>
                })}
            </select>
            <ErrorMessage errorCheck={errors["resTime"]}/>
            <label htmlFor="guests">Number of guests</label>
            <input onChange={handleChange} type="number" placeholder="1" min="1" max="10" id="guests" name="guests"/>
            <ErrorMessage errorCheck={errors["guests"]}/>
            <label htmlFor="occasion">Occasion</label>
            <select onChange={handleChange} id="occasion" name="occasion" >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" disabled={Object.keys(errors).length !== 0 }/>
     </form>
    )
}

export default BookingForm;