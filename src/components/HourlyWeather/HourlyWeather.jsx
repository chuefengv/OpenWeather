import React from 'react'
import './HourlyWeather.css'

export default function HourlyWeather({weatherInfo}) {

    return (
        <div className='hourly-weather-wrapper'>
            {weatherInfo.weeklyWeather.slice(0,7).map((hour, i)=>{
                return(
                    <div key={i} className='hourly-weather-temperature'>
                        <div className='hourly-weather-time'>
                            {hour.dt_txt.substring(10,16)}
                        </div>
                        <div className='hourly-weather-description'>
                            <div><img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt='weather icon'></img></div>
                            <div>{hour.weather[0].main}</div>
                        </div>
                        <div className='hourly-weather-degree'>
                            {Math.floor((hour.main.temp-273)*1.8+32)}°
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
