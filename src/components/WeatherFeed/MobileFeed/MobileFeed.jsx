import React from 'react'
import {Location, CurrentWeather, HourlyWeather, WeeklyWeather} from '../../index'
import './MobileFeed.css'

export default function MobileFeed() {
    return (
        <div className='mobile-feed-wrapper'>
            <div className='mobile-feed-location'>
                <Location />
            </div>
            <div className='mobile-feed-current-weather'>
                <CurrentWeather />
            </div>
            <div className='mobile-feed-hourly-weather'>
                <HourlyWeather />
            </div>
            <div className='mobile-feed-weekly-weather'>
                <WeeklyWeather />
            </div>
        </div>
    )
}
