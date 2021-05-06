import './Result.css'
import { Card } from 'react-bootstrap'


const Result = ({name, icon, description, temp, feels_like, speed, error}) => {
    return (
        <div className="results">
            <div className="name">{name && <h1>{name}</h1>}
            <Card.Img variant="top" src={icon} alt="display image"/></div>
            <div className="description"><strong>Description:</strong>{description && <p>{description}</p>}</div>
            <div className="temp"><strong>Current temp:</strong>{temp && <p>{temp}&deg;F</p>}</div>
            <div className="feel"><strong>Feels like:</strong>{feels_like && <p>{feels_like}&deg;F</p>}</div>
            <div className="wind"><strong>Wind speed:</strong>{speed && <p>{speed}mph</p>}</div>
            
            {error && <p>{error}</p>}
        </div>
    )
}

export default Result;