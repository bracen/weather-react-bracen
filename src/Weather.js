import React, {useState} from "react";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
const[weatherData, setWeatherData]=useState({loaded:false});
const[city, setCity]=useState(props.defaultCity);


  function handleResponse(response){
    setWeatherData({
    loaded:true,
    city: response.data.name,
    temperature: response.data.main.temp,
    date: "Tuesday 05:11 pm",
    description: response.data.main.weather[0].description,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    minTemperature: 10,
    maxTemperature: 18,
    });

  }
  function updateCity(event){
    setCity(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const key = "7aa24630d378d5abf1d82ac33ae578d1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
    if(weatherData.loaded){return (
      <div className="weather">
        <div className="card-body">
          <form className="search text-center" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="search for a city" onChange={updateCity}
            />
            <input type="submit" value="search" className="button" />
          </form>
          <div className="container w-90 small p-4 my-4">
            <div className="row city">
              <div className="col-sm pt-4 text-center">
                <span className="city">{weatherData.city}</span>
                <br />
                <ul>
                  <li>{weatherData.date}</li>
                  <li>
                    <span className="description">
                      {weatherData.description}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <span className="weahter-icon">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                    alt="Sunny"
                  />
                </span>
                <br />
                <ul>
                  <li>
                    {" "}
                    <span className="low-high-temp">
                      L: {weatherData.minTemperature}° | H:{" "}
                      {weatherData.maxTemperature}
                    </span>
                    °{" "}
                  </li>
                </ul>
              </div>
              <div class="col-sm pt-4">
                <ul>
                  <li>
                    <span className="temperature">
                      {weatherData.temperature}
                    </span>
                    <span className="celsius">℃</span>
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span> km/h
                  </li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span> %
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="forecast text-center px-5 pt-2"></div>
        </div>
      </div>
    );} else{ handleSubmit();
      return "Loading.."


    }

}
