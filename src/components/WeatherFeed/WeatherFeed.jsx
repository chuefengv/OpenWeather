import React, {useState, useEffect} from 'react'
import './WeatherFeed.css'
import MobileFeed from './MobileFeed/MobileFeed';
import DesktopFeed from './DesktopFeed/DesktopFeed';

export default function WeatherFeed({weatherInfo}) {
    //get the current window size, flag to determine if mobile or desktop view
    const [deskMode, setDeskMode] = useState((window.innerWidth>=700) ? true : false);
    
    //constantly listen if window is greater than 700px, if yes then load desktop view, else go into mobile view
    useEffect(()=>{
        function renderFeed(){
            window.innerWidth>=700 ? setDeskMode(true) : setDeskMode(false)
        }
        window.addEventListener('resize',renderFeed)
    })
    
    return (
        <div className='weatherfeed-wrapper'>
            {/* if desktop mode flag is true, load desktop view, else go into mobile view */}
            {deskMode ? <DesktopFeed /> : <MobileFeed />}
        </div>
    )
}
