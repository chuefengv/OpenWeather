import React from 'react'
import {Location, CurrentWeather, HourlyWeather, WeeklyWeather, AdditionalInfo} from '../../index'
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
                <div><h2>Hourly Weather of Today</h2></div>
                <HourlyWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='mobile-feed-weekly-weather'>
                <div><h2>Forecast For the Next 5 Days</h2></div>
                <WeeklyWeather weatherInfo={weatherInfo}/>
            </div>
            <div className='mobile-feed-additional-info'>
                <AdditionalInfo weatherInfo={weatherInfo}/>
            </div>
        </div>
    )
}
