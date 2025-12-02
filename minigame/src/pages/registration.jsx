// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear 

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Registration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const validatePassword = (pwd) => {
        if (pwd.length < 8) {
            return "Password must be at least 8 characters long";
        }
        return ""; // empty string = no error
    };

    const addUser = () => {
        setErrorMessage("");

        if (!username || !password) {
            setErrorMessage("Username and password are required");
            return;
        }

        const validationError = validatePassword(password);
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        localStorage.setItem('userUsername', username);
        localStorage.setItem('userPassword', password);

        navigate('/login'); // redirect to login page after registration
    };

    const clearList = () => {
        localStorage.removeItem("userUsername");
        localStorage.removeItem("userPassword");
        setErrorMessage("Stored credentials cleared from local storage.");
    };

    return (
        <div className="reg-page">
            <h1 className="title">Registration</h1>
            <br />

            <div className="reg-form">

                <div className="inputs">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="margin-b" />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                </div>


                <div className="buttons">
                    <button onClick={addUser} className="margin-b">Register</button>
                    <button onClick={clearList}>Clear</button>
                </div>

                {errorMessage && (
                    <p style={{
                        color: errorMessage.includes("successful") ? "green" : "red",
                        marginTop: "10px"
                    }}>
                        {errorMessage}
                    </p>
                )}

            </div>
            <br />

        </div>
    );

};

export default Registration;