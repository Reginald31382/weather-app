import React from 'react'
import './Result.css'

const Result = ({name, description, temp, feels_like,  speed, error}) => {
    return (
        <div className="results">
            <div className="name">{name && <p>{name}</p>}</div>
            <div className="description">Description:{description && <p>{description}</p>}</div>
            <div className="temp">Current temp:{temp && <p>{temp}&deg;F</p>}</div>
            <div className="feel">Feels like:{feels_like && <p>{feels_like}&deg;F</p>}</div>
            <div className="wind">Wind speed:{speed && <p>{speed}mph</p>}</div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Result;