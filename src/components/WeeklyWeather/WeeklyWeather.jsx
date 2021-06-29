import React from 'react'
import './WeeklyWeather.css'

export default function WeeklyWeather({weatherInfo}) {
    let currentDay =  new Date();
    const daysOfWeek = ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    let temporary = weatherInfo.weeklyWeather.map((days)=>{
        return(
            <div className='weekly-weather-temperature'>
                <div className='weekly-weather-date'>
                    {days.dt_txt.substring(5,7)}/{days.dt_txt.substring(8,10)}
                </div>
                <div className='weekly-weather-icon'>
                    <img src={`https://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`} alt='weather icon'></img>
                </div>
                <div className='weekly-weather-degree'>
                    {days.main.temp}
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
