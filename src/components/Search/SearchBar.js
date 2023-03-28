import React, { useState } from "react";

function SearchBar({ setWeather }) {
  const api = {
    key: "5d2e75e4217dde2984e5ba7cb14d3ead",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [searchParam, setSearchParam] = useState("");

  const search = (e) => {
    if (e.keyCode === 13) {
      fetch(`${api.base}?q=${searchParam}&units=metric&lang=tr&appid=${api.key}`)
        .then((data) => data.json())
        .then((result) => {
          setSearchParam("");
          setWeather(result);
          console.log(result);
        });
    }
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="City"
        onChange={(e) => setSearchParam(e.target.value)}
        value={searchParam}
        onKeyDown={search}
      ></input>
    </div>
  );
}

export default SearchBar;
