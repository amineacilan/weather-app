import React, { useState } from "react";
import "../src/index.css";
import Background from "./components/Background";
import Search from "./components/Search/SearchBar";
import Result from "./components/Result";
function App() {
  const [weather, setWeather] = useState({});
  return (
    <section className="app">
      <Background background={weather.weather && weather.weather[0].main}></Background>
      <div id="title"> WEATHER APP</div>
      <Search setWeather={setWeather}></Search>
      <Result weather={weather}></Result>
    </section>
  );
}

export default App;
