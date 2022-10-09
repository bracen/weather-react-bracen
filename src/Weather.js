import React, {useState} from "react";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
const[temperature, setTemperature]=useState("");
const[loaded, setloaded]=useState(false);


 

  function handleResponse(response){
    setTemperature(response.data.main.temp)
  }

  let weatherData = {
    city: "Paris",
    temperature: 15,
    date: "Tuesday 05:11 pm",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 5,
    wind: 10,
    minTemperature: 10,
    maxTemperature: 18,
  };
  
    if(loaded){return (
      <div className="weather">
        <div className="card-body">
          <form className="search text-center">
            <input
              className="search-input"
              type="text"
              placeholder="search for a city"
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
                      {temperature}
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
    );} else{ let city = "Paris";
  const key = "7aa24630d378d5abf1d82ac33ae578d1";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  setloaded(true);

    }

}
