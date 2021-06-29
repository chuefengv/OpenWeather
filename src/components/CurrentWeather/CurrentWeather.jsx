import React from 'react'

export default function CurrentWeather() {
    return (
        <div className='current-weather-wrapper'>
            <div className='current-weather-temp'>
                <div>
                    Clear Skies
                </div>
                <div>
                    79 Degrees
                </div>
            </div>
            <div>
                <div className='current-weather-high'>
                    High: 90 Degrees
                </div>
                <div className='current-weather-low'>
                    Low: 90 Degrees
                </div>
            </div>
        </div>
    )
}
