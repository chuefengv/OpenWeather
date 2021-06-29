import React from 'react'
import './WeatherFeed.css'
import MobileFeed from './MobileFeed/MobileFeed';
import DesktopFeed from './DesktopFeed/DesktopFeed';

export default function WeatherFeed({weatherInfo, view}) {
    
    return (
        <div className='weatherfeed-wrapper'>
            {/* if desktop mode flag is true, load desktop view, else go into mobile view */}
            {view.deskMode ? <DesktopFeed weatherInfo={weatherInfo}/> : <MobileFeed weatherInfo={weatherInfo}/>}
        </div>
    )
}
