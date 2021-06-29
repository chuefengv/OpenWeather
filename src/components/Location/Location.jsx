import React, {useState, useEffect} from 'react'
import './Location.css'

export default function Location({weatherInfo}) {
    let currentDay =  new Date();
    const daysOfWeek = ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [time, setTime] = useState(0);

    useEffect(()=>{
        var timerID = setInterval( () => updateTime(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
    },[time])

    function updateTime(){
        setTime(currentDay.toLocaleTimeString('en-GB'))
    }
    
    return (
        <div className='location-wrapper'>
            <div className='location-city'>{weatherInfo.currWeather.name}</div>
            <div className='location-date'>{daysOfWeek[currentDay.getDay()]}</div>
            <div className='location-time'>{time}</div>
        </div>
    )
}
