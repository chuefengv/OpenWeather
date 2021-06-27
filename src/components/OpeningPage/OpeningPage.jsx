import React, {useState, useEffect}  from 'react'
import Axios from 'axios';
import './OpeningPage.css'

export default function OpeningPage({setFirstSearch, weather}) {
    const [zipcode, setZipcode] = useState(0);
    const API_KEY = '1364ff82ee89c8513773028b0e6a5191'

    
    function searchWeather(){

        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${API_KEY}`)    
        .then(res =>{
            setFirstSearch(true);
            weather.setCurrWeather(res.data.city.name);
            console.log(weather.currWeather); //every 8 indexes is a new day
        })
        .catch(err =>{
            console.log(err.message);
        });        
    }
    
    function handleZipChange(e){
        e.preventDefault();
        setZipcode(e.target.value);
    }

    return (
        <div className='opening-wrapper'>
            <div className='opening-searchbox'>

                <div className='opening-search-city'>
                    Enter Zip Code
                </div>
                <input type='text' placeholder='90210' onChange={(e)=>handleZipChange(e)} maxLength="5"/>

                <button onClick={()=>searchWeather()}>Search</button>
            </div>
        </div>
    )
}
