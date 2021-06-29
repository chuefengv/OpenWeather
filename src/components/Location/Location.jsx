import React, {useState, useEffect} from 'react'
import './Location.css'

export default function Location({weatherInfo}) {
    let currentDay =  new Date();
    const daysOfWeek = ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const [time, setTime] = useState(0);

    useEffect(()=>{
        setTime(currentDay.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    })
    
    return (
        <div className='location-wrapper'>
            <div className='location-city'>{weatherInfo.city}</div>
            <div className='location-date'>{daysOfWeek[currentDay.getDay()]}</div>
            <div className='location-time'>{time}</div>
        </div>
    )
}
