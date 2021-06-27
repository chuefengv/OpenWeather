import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import {MainPage, OpeningPage} from './components/index';
function App() {
  
  const [firstSearch, setFirstSearch] = useState(false);
  const [currWeather, setCurrWeather] = useState([]);

  const weather = {currWeather, setCurrWeather}
  return (
    <div className="container">
        {!firstSearch && <OpeningPage setFirstSearch={setFirstSearch} weather={weather}/>}
        {firstSearch && <MainPage weather={weather}/>}
    </div>
  );
}

export default App;
