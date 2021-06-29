import React, {useState, useEffect}  from 'react'
import Axios from 'axios'
import './SearchBox.css'
import mGlass from '../../assets/search.svg'

export default function SearchBox({weatherInfo, view}) {

    //zip code being input 
    const [zipcode, setZipcode] = useState(0);
    //flag to check if valid zip code
    const [wrongInput, setWrongInput] = useState(false);

    function searchWeather(){
        //in a real project, api key would be put in ENV VAR
        const API_KEY = '2d0e7b3995100b39ed551550fa2ca310'
    
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`)    
        .then(res =>{
            weatherInfo.setCurrWeather(res.data);
            setWrongInput(false);
            return Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${API_KEY}`)
        })
        .then(res=>{
            weatherInfo.setWeeklyWeather(res.data.list);
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
                {!wrongInput ? <div className='searchbox-input-instruction'>Enter a Zip Code</div> : <div className='searchbox-input-instruction wrong'>*Not a Valid Zipcode*</div>}

                <div className='searchbox-input-box'>
                    <input type='text' placeholder='90210' onChange={(e)=>handleZipChange(e)} maxLength="5"/>
                </div>

                <div onClick={()=>searchWeather()} className='searchbox-search-button'>
                    <img src={mGlass} alt='search button'></img>
                </div>

            </div>
        </div>
    )
}
