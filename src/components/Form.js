import React from 'react'
import './Form.css'

const Form = (props) => {
    return (
        <form className="myForm" onSubmit={props.getWeather}>
            <h3>City</h3>
            <input type='text' placeholder='Enter your city' name='city'/>
            <button onClick={() => props.clickHandle('')}>Search</button>
        </form>
    )
}

export default Form;