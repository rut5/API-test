// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear 

import React from "react";
import { useState, useEffect } from "react";
import "../login.css";

function Registration() {

    const [search, setSearch] = useState('');
    const [list, setList] = useState([]); // empty array 

    const addUser = () => {
        localStorage.setItem('username', search);
        setSearch('');
        setList((l) => [...l, localStorage.getItem('username')]); // spread operator
    };

    const clearList = () => {
        localStorage.clear();
    };

    useEffect(() => {
        setList([localStorage.getItem('username')]);
    }, []); // only runs once, renders the key value pairs in local storage

    return (
        <div className="reg-page">
            <h1 className="title">Registration</h1>
            <br />

            <div className="reg-form">
                <div className="inputs">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Username" className ="i-1"/>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="buttons">
                    <button onClick={addUser} className="b-1">Register</button>
                    <button onClick={clearList}>Clear</button>
                </div>

                {/* adds a list */}
                <ul className="user-list">
                    {list.map((item, index) => (
                        <li key={index} className="list-item">{item}</li>
                    ))}
                </ul>
            </div>
            <br />

        </div>
    );

};

export default Registration;