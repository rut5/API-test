import Home from "../pages/home.jsx";
import API from "./API.jsx";

function updateScore({ inputAge, factAge, score, setScore}) {

  if (inputAge === factAge) {
    setScore (prevScore => prevScore +1);
  };

};

export default updateScore;
