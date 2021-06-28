import React, {useState}  from 'react'
import Axios from 'axios'
import './SearchBox.css'

export default function SearchBox({weatherInfo}) {
    //zip code being input 
    const [zipcode, setZipcode] = useState(0);
    //flag to check if valid zip code
    const [wrongInput, setWrongInput] = useState(false);

    function searchWeather(){
        const API_KEY = '1364ff82ee89c8513773028b0e6a5191'
    
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${API_KEY}`)    
        .then(res =>{
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
        <div className='searchbox-wrapper'>
            <div className='searchbox-input'>

                {wrongInput && <div>Not a Valid Zipcode</div>}
                <div className='searchbox-input-zip'>
                    <p>Enter Zip Code</p>
                </div>
                <input type='text' placeholder='90210' onChange={(e)=>handleZipChange(e)} maxLength="5"/>

                <button onClick={()=>searchWeather()}>Search</button>
            </div>
        </div>
    )
}
