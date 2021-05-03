import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'
import { useState } from 'react'


function App() {
  const clickHandle = data => {('')}
  const [weather, setWeather] = useState([])
    const APIKEY = 'aa9b2583a44db40d6e82d314ffb3bd4e'

    async function fetchData(e) {
        const city = e.target.elements.city.value
        e.preventDefault()
        const apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
        .then (res => res.json())
        .then(data => data)
        if(city) {
            setWeather({
                data: apiData,
                name: apiData.name,
                description: apiData.weather[0].description,
                temp: apiData.main.temp,                        //need to fix this formula with an const maybe..
                feels_like: apiData.main.feels_like,            //const kelvinToFarenheit = (k) => {return(k-273.15).toFixed(2);};
                speed: apiData.wind.speed,                     //<p>{kelvinToFarenheit(apiData.main.temp)}&deg; C</p>
                error: ""                                       //use this function in Results
            })
        } else {
            setWeather ({
                data: '',
                name: '',
                description: '',
                temp: '',
                feels_like: '',
                speed: '',
                error: "Please type a city"
            })
        }
    }

    return (
        <div>
            <Header/>
            <Form getWeather={fetchData} clickHandle={clickHandle}/>
            <Result
            name={weather.name}
            description={weather.description}
            temp={weather.temp}
            feels_like={weather.feels_like}
            speed={weather.speed}
            error={weather.error}
            />
            {console.log(weather.data)}
        </div>
    )
}

export default App;