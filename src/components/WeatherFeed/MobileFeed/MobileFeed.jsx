import React from 'react'
import {Location, CurrentWeather, HourlyWeather} from '../../index'
import './MobileFeed.css'

export default function MobileFeed({weatherInfo}) {
    return (
        <div className='mobile-feed-wrapper'>
            <div className='mobile-feed-location'>
                <Location weatherInfo={weatherInfo}/>
            </div>
            <div className='mobile-feed-current-weather'>
                <CurrentWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='mobile-feed-hourly-weather'>
                <HourlyWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='mobile-feed-weekly-weather'>
                whatsup
            </div>
        </div>
    )
}
