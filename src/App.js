import './App.css';
import {useState} from 'react';
import {SearchBox, WeatherFeed} from './components/index';
function App() {

  //state variable to hold city weather information
  const [currWeather, setCurrWeather] = useState([]);
  const [city, setCity] = useState("")

  //prop object for easy passing
  const weatherInfo = {currWeather, setCurrWeather, city, setCity}
  
  return (
    <div className="container">
        <SearchBox weatherInfo={weatherInfo}/>
        <WeatherFeed weatherInfo={weatherInfo}/>
    </div>
  );
}

export default App;
