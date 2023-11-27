import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=79542c63a5a2c2777d88607f2331829a`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Kathmandu</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">Clouds</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65°F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
