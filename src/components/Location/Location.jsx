import React, {useState, useEffect} from 'react'
import './Location.css'

export default function Location({weatherInfo}) {
    let currentDay =  new Date();
    //array of days of the week, index will be determined by Date()
    const daysOfWeek = ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    //keep track of constantly updating time
    const [time, setTime] = useState(0);

    useEffect(()=>{
        //every second, update the time
        var timerID = setInterval( () => updateTime(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
    },[updateTime])

    function updateTime(){
        setTime(currentDay.toLocaleTimeString())
    }
    
    return (
        <div className='location-wrapper'>
            <div className='location-city'>{weatherInfo.currWeather.name}</div>
            <div className='location-date'>{daysOfWeek[currentDay.getDay()]}</div>
            <div className='location-time'>{!time==0 && time}</div>
        </div>
    )
}
