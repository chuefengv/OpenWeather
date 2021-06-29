import React from 'react'
import './CurrentWeather.css'

export default function CurrentWeather({weatherInfo}) {

    //api returns lower cased description, must capitalize
    function capitalizeWord(word){
        return word.charAt(0).toUpperCase()+word.slice(1);
    }

    return (
        <div className='current-weather-wrapper'>

            <div className='current-weather-temp'>
                <div className='current-weather-description'>
                    {weatherInfo.currWeather.weather && <div>{capitalizeWord(weatherInfo.currWeather.weather[0].description)}</div>}
                </div>
                <div className='current-weather-degrees'>
                    {weatherInfo.currWeather.main && <div>{Math.floor(1.8*(weatherInfo.currWeather.main.temp-273)+32)}°</div>}
                </div>
            </div>

            <div className='current-weather-supplementary'>
                <div className='current-weather-high'>
                    {weatherInfo.currWeather.main && <div>High: {Math.floor(1.8*(weatherInfo.currWeather.main.temp_max-273)+32)}°</div>}
                </div>
                <div className='current-weather-low'>
                    {weatherInfo.currWeather.main && <div>Low: {Math.floor(1.8*(weatherInfo.currWeather.main.temp_min-273)+32)}°</div>}
                </div>
            </div>

        </div>
    )
}
