import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import {MainPage, OpeningPage} from './components/index';
function App() {
  //flag to see if opening a new page
  const [firstSearch, setFirstSearch] = useState(false);
  //state variable to hold city weather information
  const [currWeather, setCurrWeather] = useState([]);
  const [city, setCity] = useState("")

  //prop object for easy passing
  const weatherInfo = {currWeather, setCurrWeather, city, setCity}
  
  return (
    <div className="container">
        {!firstSearch && <OpeningPage setFirstSearch={setFirstSearch} weatherInfo={weatherInfo}/>}
        {firstSearch && <MainPage weatherInfo={weatherInfo}/>}
    </div>
  );
}

export default App;
