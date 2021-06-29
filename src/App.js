import './App.css';
import Axios from 'axios'
import {useState, useEffect} from 'react';
import {SearchBox, WeatherFeed} from './components/index';
function App() {

  //get the current window size, flag to determine if mobile or desktop view
  const [deskMode, setDeskMode] = useState((window.innerWidth>=900) ? true : false);
  //state variable to hold city weather information
  const [currWeather, setCurrWeather] = useState([]);

  //prop object for easy passing
  const weatherInfo = {currWeather, setCurrWeather}
  const view = {deskMode, setDeskMode}

  useEffect(()=>{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=1364ff82ee89c8513773028b0e6a5191`)    
    .then(res =>{
        weatherInfo.setCurrWeather(res.data);
    })
    .catch(err =>{
        console.log(err.message);
    }); 
  },[])

  //constantly listen if window is greater than 700px, if yes then load desktop view, else go into mobile view
  useEffect(()=>{
      function renderFeed(){
          window.innerWidth>=700 ? setDeskMode(true) : setDeskMode(false)
      }
      window.addEventListener('resize',renderFeed)
  })

  return (
    <div className="container">
        <SearchBox weatherInfo={weatherInfo} view={view}/>
        <WeatherFeed weatherInfo={weatherInfo} view={view}/>
    </div>
  );
}

export default App;
