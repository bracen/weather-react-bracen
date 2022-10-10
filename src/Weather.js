import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready:true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const key = "7aa24630d378d5abf1d82ac33ae578d1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="card-body">
          <form className="search text-center" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="search for a city"
              onChange={updateCity}
            />
            <input type="submit" value="search" className="button" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    return search();
  }
}
