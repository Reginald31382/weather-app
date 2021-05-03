import './Form.css'



const Form = (props) => {
    return (
        <form className="myForm" onSubmit={props.getWeather}>
            <h3 className="place">City</h3>
            <input className="destination" type='text' placeholder='Enter your city' name='city'/>
            <button className="button" onClick={() => props.clickHandle('')}>Search</button>
        </form>
    )
}

export default Form;