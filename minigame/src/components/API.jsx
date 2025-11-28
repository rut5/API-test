import React, { useEffect, useState } from "react";

function API(props) {

    const [fact, setFact] = useState([]);
    const [showAge, setShowAge] = useState(false); //n

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

    // skapa ny UseState variabel som kopplas till target value i input

    //useEffect(() => {fetchData();}, [])

    const enterName = () => {
        fetchData();
    } 

    const displayAge = () => {
        setShowAge(true);
    }

    return (
        <div>

            <button onClick={enterName} className="btn b">Enter name
            </button>

            <p className="p b s"> Name: {fact.name} </p>

            <button onClick={displayAge} className="btn b">Reveal Age</button>

            <p className="p b s"> Age: {fact.age} </p>

        </div>
    );
};

export default API;

// in try {} we store our api url
// <button onClick={generateName} className="btn b">Generate random name</button>