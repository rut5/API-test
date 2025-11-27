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

    // hur kan jag lägga till fler namn och sen randomisera dessa?

    //useEffect(() => {fetchData();}, [])

    const generateName = () => {
        fetchData(fact.name);
    }

    const displayAge = () => {
        fetchData(fact.age);
    }

    return (
        <div>

            <button onClick={generateName} className="btn b">Generate random name</button>
            <p className="p b s"> Name: {fact.name} </p>
            <button onClick={displayAge} className="btn b">Reveal typical age</button>
            <p className="p b s"> Age: {fact.age} </p>

        </div> // hur gör jag så inte båda visas när man klickar på generate name
    );
};

export default API;

// in try {} we store our api url