import React from 'react'
import './Searchbar.css'
import MobSearchbar from './MobSearchbar/MobSearchbar'
import DeskSearchbar from './DeskSearchbar/DeskSearchbar'

export default function Searchbar() {
    return (
        <div className='searchbar-wrapper'>
            <MobSearchbar />
        </div>
    )
}
