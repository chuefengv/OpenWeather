import React from 'react'
import './WeatherFeed.css'

export default function WeatherFeed({weatherInfo}) {
    return (
        <div>
            {weatherInfo.city}
            {weatherInfo.currWeather.map((item, i)=>{
               return(
                   <div key={i}>
                       {Math.floor(1.8*(item.main.temp-273)+32)}
                   </div>
               )
           })}
        </div>
    )
}
