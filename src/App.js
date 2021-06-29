import './App.css';
import Axios from 'axios'
import {useState, useEffect} from 'react';
import {SearchBox, WeatherFeed, Footer} from './components/index';
function App() {

  //get the current window size, flag to determine if mobile or desktop view
  const [deskMode, setDeskMode] = useState((window.innerWidth>=800) ? true : false);
  //state variable to hold current weather information
  const [currWeather, setCurrWeather] = useState([]);
  //state variable to hold weekly weather information
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  //prop object for easy passing
  const weatherInfo = {currWeather, setCurrWeather, weeklyWeather, setWeeklyWeather}
  const view = {deskMode, setDeskMode}

  useEffect(()=>{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=2d0e7b3995100b39ed551550fa2ca310`)    
    .then(res =>{
        weatherInfo.setCurrWeather(res.data);
        return Axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=90210&appid=2d0e7b3995100b39ed551550fa2ca310`)
    })
    .then(res =>{
        weatherInfo.setWeeklyWeather(res.data.list);
    })
    .catch(err =>{
        console.log(err.message);
    }); 
  },[])

  //constantly listen if window is greater than 700px, if yes then load desktop view, else go into mobile view
  useEffect(()=>{
      function renderFeed(){
          window.innerWidth>=800 ? setDeskMode(true) : setDeskMode(false)
      }
      window.addEventListener('resize',renderFeed)
  })

  return (
    <div className="container">
        <SearchBox weatherInfo={weatherInfo} view={view}/>
        <WeatherFeed weatherInfo={weatherInfo} view={view}/>
        <Footer />
    </div>
  );
}

export default App;
