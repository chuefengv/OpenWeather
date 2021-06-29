import React from 'react'
import './HourlyWeather.css'

export default function HourlyWeather({weatherInfo}) {


    return (
        <div className='hourly-weather-wrapper'>
            {weatherInfo.weeklyWeather && weatherInfo.weeklyWeather.slice(0,5).map((hour, i)=>{
                return(
                    <div key={i} className='hourly-weather-temperature'>
                        {hour.main.temp}
                        {hour.main.dt_txt}
                    </div>
                )
            })}
        </div>
    )
}
