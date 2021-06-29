import React from 'react'
import './DesktopFeed.css'
import {Location, CurrentWeather, HourlyWeather, WeeklyWeather} from '../../index'

export default function DesktopFeed({weatherInfo}) {
    return (
        <div className='desktop-feed-wrapper'>
            <div className='desktop-feed-location'>
                <Location weatherInfo={weatherInfo}/>
            </div>
            <div className='desktop-feed-current-weather'>
                <CurrentWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='desktop-feed-hourly-weather'>
                <div><h2>Hourly Weather of Today</h2></div>
                <HourlyWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='desktop-feed-weekly-weather'>
                <div><h2>Forecast For the Next 5 Days</h2></div>
                <WeeklyWeather weatherInfo={weatherInfo}/>
            </div>
        </div>
    )
}
