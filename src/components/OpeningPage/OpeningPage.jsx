import React, {useState, useEffect}  from 'react'
import Axios from 'axios';
import './OpeningPage.css'

export default function OpeningPage({setFirstSearch, weather}) {
    const [searchCity, setSearchCity] = useState(null);
    const [searchState, setSearchState] = useState(null);
    const [searchCountry, setSearchCountry] = useState(null);

    const API_KEY = '1364ff82ee89c8513773028b0e6a5191'

    
    function searchWeather(){

        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity},${searchState},${searchCountry}&appid=${API_KEY}`)    
        .then(res =>{
            console.log(res.data.list[0]); //every 8 indexes is a new day
            setFirstSearch(true);
        })
        .catch(err =>{
            console.log(err.message);
        });        
    }
    
    function handleCity(e){
        e.preventDefault();
        setSearchCity(e.target.value);
    }

    function handleState(e){
        e.preventDefault();
        setSearchState(e.target.value);
    }

    function handleCountry(e){
        e.preventDefault();
        setSearchCountry(e.target.value);
    }

    return (
        <div className='opening-wrapper'>
            <div className='opening-searchbox'>
                <div className='opening-search-city'>
                    City
                </div>
                <input type='text' placeholder='Brooklyn' onChange={(e)=>handleCity(e)}/>
                <div className='opening-search-state'>
                    State
                </div>
                <input type='text' placeholder='NY' onChange={(e)=>handleState(e)}/>
                <div className='opening-search-country'>
                    Country
                </div>
                <input type='text' placeholder='USA' onChange={(e)=>handleCountry(e)}/>

                <button onClick={()=>searchWeather()}>Search</button>
            </div>
        </div>
    )
}
