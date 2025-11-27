import React from "react";
import {useEffect, useState} from "react";

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    useEffect(() => {
        document.title = `Minigame, Count: ${count}`
    }, [count]);

    const changeColor = () => {
        setColor((c) => c === "red" ? "green" : "red");
    }

    return(

        <div>
            <p style={{color : color}}>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
            <button onClick={changeColor}>Change color</button>
        </div>

    );

};

export default UseEffect;

// everytime the count-btn gets clicked the count goes up by 1
// everytime the color-btn gets clicked the color changes from red to green, or green to red