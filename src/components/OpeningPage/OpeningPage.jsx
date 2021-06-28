import React, {useState, useEffect}  from 'react'
import searchWeather from '../searchWeather.js'
import Axios from 'axios'
import './OpeningPage.css'

export default function OpeningPage({setFirstSearch, weather}) {
    const [zipcode, setZipcode] = useState(0);
    const [wrongInput, setWrongInput] = useState(false);
    
    function handleZipChange(e){
        e.preventDefault();
        setZipcode(e.target.value);
    }

    return (
        <div className='opening-wrapper'>
            <div className='opening-searchbox'>

                {wrongInput && <div>Not a Valid Zipcode</div>}
                <div className='opening-search-city'>
                    <p>Enter Zip Code</p>
                </div>
                <input type='text' placeholder='90210' onChange={(e)=>handleZipChange(e)} maxLength="5"/>

                <button onClick={()=>searchWeather(zipcode, weather, setFirstSearch, setWrongInput)}>Search</button>
            </div>
        </div>
    )
}
