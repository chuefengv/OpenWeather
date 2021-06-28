import Axios from 'axios'

export default function searchWeather(zipcode, weather, setFirstSearch,setWrongInput){
    const API_KEY = '1364ff82ee89c8513773028b0e6a5191'

    Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${API_KEY}`)    
    .then(res =>{
        setFirstSearch(true);
        weather.setCurrWeather(res.data.city.name);
        console.log(weather.currWeather); //every 8 indexes is a new day
    })
    .catch(err =>{
        console.log(err.message);
        setWrongInput(true);
    });        
}