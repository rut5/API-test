import API from "../components/API.jsx";
import updateScore from "../components/score.jsx"; 
import "../home.css";
import {useState} from "react";

function Home() {

    const [score, setScore] = useState(0); // n
    const [inputName, setInputName] = useState(''); 
    const [inputAge, setInputAge] = useState('');

    const handleName = (event) => {
        setInputName(event.target.value);
    };

    const handleAge = (event) => {
        setInputAge(event.target.value);
    };

    return (

        <div>

            <div className="score-container">
                <p className="score">Score: <span id="score">{score}</span></p>
            </div>

            <div className="container f">
                <div className="home-div f">

                    <div className="text-box f">
                        <h1 className="title bold">Name the Age</h1>
                        <p className="p b bold">Guess the typical age of people with a specific name</p>
                        <p className="p s">You get one point for each correct guess<br /><br />You can guess up to 5 years younger or older than the persons age<br />and still score a point</p>
                    </div>
                    <div className="api-div">
                        <input className="input-name"
                            type="text"
                            value={inputName}
                            onChange={handleName}
                            placeholder="Type a name"
                        />
                        <input className="input-age"
                            type="number"
                            value={inputAge}
                            onChange={handleAge}
                            placeholder="Guess age"
                        />
                        <API 
                        name={inputName}
                        age={inputAge}
                        score={score}
                        setScore={setScore}
                        updateScore={updateScore}
                        /> 
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;