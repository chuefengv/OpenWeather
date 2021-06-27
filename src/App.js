import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import {MainPage, OpeningPage} from './components/index';
function App() {
  // const API_KEY = '1364ff82ee89c8513773028b0e6a5191'

  // useEffect(()=>{
  //   Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=${API_KEY}`)    
  //   .then(res =>{
  //       console.log(res.data.list[0]); //every 8 indexes is a new day
  //   })
  //   .catch(err =>{
  //       console.log(err.message);
  //   });
  // },[]);
  
  const [firstSearch, setFirstSearch] = useState(false);

  return (
    <div className="container">
        {!firstSearch && <OpeningPage setFirstSearch={setFirstSearch}/>}
        {firstSearch && <MainPage />}
    </div>
  );
}

export default App;
