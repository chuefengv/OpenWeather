import React, {useState, useEffect}  from 'react'
import Axios from 'axios'
import './SearchBox.css'

export default function SearchBox({weatherInfo, view}) {

    //zip code being input 
    const [zipcode, setZipcode] = useState(0);
    //flag to check if valid zip code
    const [wrongInput, setWrongInput] = useState(false);

    function searchWeather(){
        //in a real project, api key would be put in ENV VAR
        const API_KEY = '1364ff82ee89c8513773028b0e6a5191'
    
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`)    
        .then(res =>{
            weatherInfo.setCurrWeather(res.data);
            setWrongInput(false);
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
        <div className='searchbox-wrapper'>
            <div className={view.deskMode ? 'searchbox-desktop-wrapper' : 'searchbox-mobile-wrapper'}>
                
                {/* if user enters invalid zipcode, send warning message */}
                {wrongInput && <p>Not a Valid Zipcode</p>}

                <p>Enter Zip Code</p>
                <input type='text' placeholder='90210' onChange={(e)=>handleZipChange(e)} maxLength="5"/>

                <button onClick={()=>searchWeather()}>Search</button>
            </div>
        </div>
    )
}
