import React, { useEffect, useState } from "react";

function API(props) {

    const [fact, setFact] = useState([]);
    const [showAge, setShowAge] = useState(false);
    const {
        name,
        inputAge,
        score,
        setScore,
        updateScore
    } = props; // not sure about these props

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.agify.io/?name=${inputName}`)
            const data = await response.json();
            setFact(data);
            setShowAge(false);
        }
        catch (error) {
            console.log("Error fetching data:", error);
        };
    };

    const inputName = props.name;

    //useEffect(() => {fetchData();}, [])

    const enterName = () => {
        fetchData();
    }

    const displayAge = () => {
        setShowAge(true);
    }

        if (fact && fact.age && inputAge) {
            updateScore(inputAge, fact.age, score, setScore); 
        }

    return (
        <div>

            <button onClick={enterName} className="btn b">Enter name
            </button>

            <p className="p b s"> Name: {fact.name} </p>

            <button onClick={displayAge} className="btn b">Reveal Age</button>

            <p className="p b s">
                Age: 
                {showAge && fact.age && (
                    <span className="age-value">{' '}{fact.age}</span>
                )}
            </p>

        </div>
    );
};

export default API;

// in try {} we store our api url
// <button onClick={generateName} className="btn b">Generate random name</button>
// <p className="p b s"> Age: {fact.age} </p>