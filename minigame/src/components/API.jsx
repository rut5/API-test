import React, { useEffect, useState } from "react";

function API() {

    const [fact, setFact] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.agify.io/?name=meelad")
            const data = await response.json();
            setFact(data);
        }
        catch (error) {
            console.log("Error fetching data:", error);
        };
    };

    //useEffect(() => {fetchData();}, [])

    const generateFact = () => {
        fetchData();
    }

    return(
        <div>

        <h1>API</h1>
        <button onClick={generateFact}>Generate random name</button>
        <p> Name: {fact.name} </p>
        <p> Age: {fact.age} </p>

        </div>
    );
};

export default API;

// in try {} we store our api url