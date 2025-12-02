// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear 

import React from "react";
import { useState, useEffect } from "react";

function Registration() {

    const [search, setSearch] = useState('');
    const [list, setList] = useState([]); // empty array 

    const addUser = () => {
        localStorage.setItem('username', search);
        setSearch('');
        setList((l) => [...l, localStorage.getItem('username')]); // spread operator
    };
    useEffect(() => {
        setList([localStorage.getItem('username')]);
    }, []); // only runs once, renders the key value pairs in local storage

    return (
        <div>
            <h1>Registration</h1>
            <br />

            <div className="reg-form">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={addUser}>Register</button>

                {/* adds a list */}
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <br />

        </div>
    );

};

export default Registration;