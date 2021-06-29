import React from 'react'
import {Location, CurrentWeather, HourlyWeather, WeeklyWeather} from '../../index'
import './MobileFeed.css'
import { useEffect, useState } from 'react'

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
                Hello
            </div>
            <div className='mobile-feed-weekly-weather'>
                whatsup
            </div>
        </div>
    )
}
