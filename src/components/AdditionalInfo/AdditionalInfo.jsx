import React from 'react'
import './AdditionalInfo.css'

export default function AdditionalInfo({weatherInfo}) {
    return (
        <div className='additional-info-wrapper'>

            <div className='additional-info-row'>
                <div className='additional-info-feel'>
                    Feels Like: {weatherInfo.currWeather.main && Math.floor((weatherInfo.currWeather.main.feels_like-273)*1.8+32)}°
                </div>
                <div className='additional-info-humidity'>
                    Humidity: {weatherInfo.currWeather.main && weatherInfo.currWeather.main.humidity}%
                </div>
            </div>

            <div className='additional-info-row'>
                <div className='additional-info-wind'>
                    Wind Speed: {weatherInfo.currWeather.wind && weatherInfo.currWeather.wind.speed} mps
                </div>
                <div className='additional-info-cloud'>
                    Cloudiness: {weatherInfo.currWeather.clouds && weatherInfo.currWeather.clouds.all}%
                </div>
            </div>

            <div className='additional-info-row'>
                <div className='additional-info-visibility'>
                    Visbility: {weatherInfo.currWeather && weatherInfo.currWeather.visibility} meters
                </div>
                <div className='additional-info-pressure'>
                    Pressure: {weatherInfo.currWeather.main && weatherInfo.currWeather.main.pressure} hPa
                </div>
            </div>

        </div>
    )
}
