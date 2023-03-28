import snowy from "../Picture/snowy.jpg";
import GetPicture from "./GetPicture";

function index({ background }) {
  return (
    <div className="background">
      <div className="overlay"></div>
      <GetPicture status={background}></GetPicture>
      <img className="background-picture" src={snowy}></img>
    </div>
  );
}

export default index;
