import React from 'react'

export default function MainPage({weather}) {
    return (
        <div>
            {weather.currWeather}
        </div>
    )
}
