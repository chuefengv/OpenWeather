import React, {useState, useEffect}  from 'react'
import Axios from 'axios'
import './OpeningPage.css'

export default function OpeningPage({setFirstSearch, weatherInfo}) {
    //zip code being input 
    const [zipcode, setZipcode] = useState(0);
    //flag to check if valid zip code
    const [wrongInput, setWrongInput] = useState(false);

    function searchWeather(){
        const API_KEY = '1364ff82ee89c8513773028b0e6a5191'
    
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${API_KEY}`)    
        .then(res =>{
            setFirstSearch(true)
            weatherInfo.setCurrWeather(res.data.list);
            weatherInfo.setCity(res.data.city.name);
        })
        .catch(err =>{
            console.log(err.message);
            setWrongInput(true);
        });        
    }

    //keeps track of zipcode user input
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

                <button onClick={()=>searchWeather()}>Search</button>
            </div>
        </div>
    )
}
