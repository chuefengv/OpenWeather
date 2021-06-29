import React from 'react'
import './HourlyWeather.css'

export default function HourlyWeather({weatherInfo}) {


    return (
        <div className='hourly-weather-wrapper'>
            {weatherInfo.weeklyWeather && weatherInfo.weeklyWeather.slice(0,5).map((hour, i)=>{
                return(
                    <div key={i} className='hourly-weather-temperature'>
                        <div>
                            {hour.dt_txt.substring(10,16)}
                        </div>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt='weather icon'></img>
                            {hour.weather[0].main}
                        </div>

                        <div>
                            {Math.floor((hour.main.temp-273)*1.8+32)}°
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
