import { useState } from 'react';
import './App.css';
import CityInput from './Components/CityInput';
import CityWeather from './Components/CityWeather';

function App() {
  const [city,setCity]=useState("");
  const [cityWeather,setCityWeather] = useState({});

  const fetchCityWeather = () =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19632c28115e369e584909ffe4b80777`
      )
      .then((res) => res.json())
      .then((result) =>{
      console.log("Result is result", result);
       setCityWeather(result);
      });
  }

  return (
    <>
      <CityInput  city={city} setCity={setCity} 
      fetchCityWeather={fetchCityWeather} />
      <CityWeather cityWeather={cityWeather} setCityWeather={setCityWeather} />
    </>
  );
}

export default App;
