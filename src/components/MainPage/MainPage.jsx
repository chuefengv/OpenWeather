import React from 'react'

export default function MainPage({weatherInfo}) {
    return (
        <div>
            {weatherInfo.city}
           {weatherInfo.currWeather.map((item, i)=>{
               return(
                   <div key={i}>
                       {item.main.temp}
                   </div>
               )
           })}
        </div>
    )
}
