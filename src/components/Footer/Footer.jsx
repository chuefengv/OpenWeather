import React from 'react'
import './Footer.css'
import OpenWeather from '../../assets/OpenWeather.png'

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-logo'>
                <img src={OpenWeather} alt='Open Weather Logo'></img>
            </div>
            <div className='footer-text'>Built with OpenWeatherMap API</div>
        </div>
    )
}
