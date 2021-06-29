import React from 'react'
import './CurrentWeather.css'
export default function CurrentWeather() {
    return (
        <div className='current-weather-wrapper'>

            <div className='current-weather-temp'>
                <div className='current-weather-description'>
                    Clear Skies
                </div>
                <div className='current-weather-degrees'>
                    79°
                </div>
            </div>

            <div className='current-weather-supplementary'>
                <div className='current-weather-high'>
                    High: 90°
                </div>
                <div className='current-weather-low'>
                    Low: 80°
                </div>
            </div>

        </div>
    )
}
