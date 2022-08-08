import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Clock from './Clock'
import Background from './Background'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lat, lon}) => {
    const [weather,setWeather] = useState()
    const [temperature,setTemperature] = useState()
    const [isCelsius,setIsCelsius] = useState(true)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        if(lat){
            const ApiKey = '5c0e396efb13f380824d5007eeac7900'
            const ApiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`
            axios.get(ApiLink)
                .then(res => {setWeather(res.data)
                const temp ={
                  tempC:`${Math.trunc(res.data.main.temp - 273.15)} °C`,
                  tempMaxC: `${Math.trunc(res.data.main.temp_max - 273.15)} °C`,
                  tempMinC: `${Math.trunc(res.data.main.temp_min - 273.15)} °C`,
                  tempFelsC: `${Math.trunc(res.data.main.feels_like - 273.15)} °C`,
                  tempF:`${Math.trunc((res.data.main.temp - 273.15) * 9/5 + 32)} °F`,
                  tempMaxF: `${Math.trunc((res.data.main.temp_max - 273.15) * 9/5 + 32)} °F`,
                  tempMinF: `${Math.trunc((res.data.main.temp_min - 273.15) * 9/5 + 32)} °F`,
                  tempFelsF: `${Math.trunc((res.data.main.feels_like - 273.15) * 9/5 + 32)} °F`,
                }
                setTemperature(temp)
                setLoading(false)
                })
                .catch(err => console.log(err))
        }else{
          console.log('cargando')
        }
    }, [lat, lon])

    console.log(weather)
    const handelClick = () => setIsCelsius(!isCelsius)

    if(loading){
      return <LoadingScreen />
    }
    else{
      return (
        <>
        <Background state={weather?.weather[0].id}/> 
        <div className='card_weatther'>
          <div className="weather">
            <span>Temp {isCelsius ? temperature?.tempC : temperature?.tempF}</span>
              <div className='img_box'>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
              </div>
            <span>{weather?.weather[0].description}</span>
          </div>
          <div className="hour">
            <div className="button_box">
            <span>Feels like: {isCelsius ? temperature?.tempFelsC : temperature?.tempFelsF}</span>
            <button className='button_dg' onClick={handelClick}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
            </div>
            <div className="centerClock">
            <span>{weather?.name},{weather?.sys.country}</span>
            <Clock />
            </div>
            <div className="minmax">
            <span>Temp Max: {isCelsius ? temperature?.tempMaxC : temperature?.tempMaxF}</span>
            <span>Temp Min: {isCelsius ? temperature?.tempMinC : temperature?.tempMinF}</span>
            </div>
          </div>
          <div className="otherDates">
            <div className="weather_items">
              <i className='bx bx-droplet'></i>
              <span>Humidity</span>
              <span>{weather?.main.humidity}%</span>
            </div>
            <div className="weather_items">
              <i className='bx bx-low-vision'></i>
              <span>Visibility</span>
              <span>{(weather?.visibility)/1000} km</span>
            </div>
            <div className="weather_items">
              <i className='bx bx-wind'></i>
              <span>Wind Speed</span>
              <span>{weather?.wind.speed} m/s</span>
            </div>
            <div className="weather_items">
              <i className='bx bxs-thermometer'></i>
              <span>Presure</span>
              <span>{weather?.main.pressure}  hPa</span>
            </div>
          </div>
          <div className="pronostico">
          </div>
        </div>
        </>
      )

    }
}

export default CardWeather