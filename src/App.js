import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import {MainPage, OpeningPage} from './components/index';
function App() {
  //flag to see if opening a new page
  const [firstSearch, setFirstSearch] = useState(false);
  //state variable to hold city weather information
  const [currWeather, setCurrWeather] = useState("");

  const weather = {currWeather, setCurrWeather}
  return (
    <div className="container">
        {!firstSearch && <OpeningPage setFirstSearch={setFirstSearch} weather={weather}/>}
        {firstSearch && <MainPage weather={weather}/>}
    </div>
  );
}

export default App;
