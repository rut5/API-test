/* import Home from "../pages/home.jsx";
import API from "./API.jsx"; */

/* function updateScore({ inputAge, factAge, score, setScore}) {

  if (inputAge === factAge) {
    setScore (score => score +1);
  };

};

export default updateScore; */

function updateScore(inputAge, factAge, score, setScore) {
    const guessedAge = parseInt(inputAge);
    const actualAge = parseInt(factAge);

    const ageDifference = Math.abs(guessedAge - actualAge); 

    if (ageDifference <= 5) {
        setScore(prevScore => prevScore + 1);
    }
}

export default updateScore;