import React from 'react'
import './WeeklyWeather.css'

export default function WeeklyWeather({weatherInfo}) {

    let temporary = weatherInfo.weeklyWeather.map((days)=>{
        return(
            <div className='weekly-weather-temperature'>

                <div className='weekly-weather-date'>
                    {/* grabbing the date given within the full string */}
                    {days.dt_txt.substring(5,7)}/{days.dt_txt.substring(8,10)}
                </div>

                <div className='weekly-weather-icon'>
                    <div>
                        {/* weathermap offers their own icons correlated to weather */}
                        <img src={`https://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`} alt='weather icon'></img>
                    </div>
                    <div>{days.weather[0].main}</div>
                </div>

                <div className='weekly-weather-degree'>
                    {/* API gives temperature in Kelvin, must convert to fahrenheit */}
                    {Math.ceil((days.main.temp_max-273)*1.8+32)}°/{Math.floor((days.main.temp_min-273)*1.8+32)}°
                </div>
                
            </div>
        )
    })

    return (
        <div className='weekly-weather-wrapper'>
                {temporary[7]}
                {temporary[15]}
                {temporary[23]}
                {temporary[31]}
                {temporary[39]}
        </div>
    )
}
