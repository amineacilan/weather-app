import React from "react";
import cloudy from "../Picture/cloudy.jpg";
import foggy from "../Picture/foggy.jpg";
import default_background from "../Picture/default_background.jpg";
import rainy from "../Picture/rainy.jpg";
import snowy from "../Picture/snowy.jpg";
import stormy from "../Picture/stormy.jpg";
import sunny from "../Picture/sunny.jpg";


function GetPicture({ status }) {
  switch (status) {
    case "Clouds":
      return (
        <img className="background-picture" src={cloudy} alt="cloudy"></img>
      );
    case "Fog":
      return (
        <img className="background-picture" src={foggy} alt="foggy"></img>
      );
    case "Rain":
      return (
        <img className="background-picture" src={rainy} alt="rainy"></img>
      );
    case "Snow":
      return (
        <img className="background-picture" src={snowy} alt="snowy"></img>
      );
    case "Thunderstorm":
      return (
        <img className="background-picture" src={stormy} alt="stormy"></img>
      );
    case "Clear":
      return (
        <img className="background-picture" src={sunny} alt="sunny"></img>
      );
    case "Rain":
      return (
        <img className="background-picture" src={cloudy} alt="cloudy"></img>
      );

    default:
      return <img className="background-picture" src={default_background} alt="default_background"></img>;
  }
}

export default GetPicture;
