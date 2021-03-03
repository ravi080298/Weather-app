import React from 'react';
import { Container } from 'react-bootstrap';

const CityWeather = ({cityWeather,setCityWeather}) => {
    //console.log(cityWeather);
    return (
        <Container>
        <div>
            {(typeof cityWeather.main != "undefined") ?(
                <>
                <h2 className="text-warning">{Math.round((`${cityWeather.main.temp - 272.15 }` * 100)/100).toFixed(2)}°C  
                Maximum {Math.round(`${cityWeather.main.temp_max - 272.15 }` ).toFixed(2)}°C
                Minimum {Math.round(`${cityWeather.main.temp_min - 272.15 }` ).toFixed(2)}°C
                </h2>
                <h3 className="text-info">{cityWeather.name} {cityWeather.sys.country}</h3>
                <h4 className="text-white">Wind {cityWeather.wind.deg}° Wind Speed: {cityWeather.wind.speed} km/hour</h4>

                </>
            ) :("")}
            
        </div>
        </Container>
    );
};

export default CityWeather;