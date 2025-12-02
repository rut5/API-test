// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear 

import React from "react";
import { useState, useEffect } from "react";

function Registration() {



    return (
        <div>
            <h1>Registration</h1>
            <br />
            <input type="text" placeholder="Username" />
            <button>Done</button>
            <br />


            <input type="password" placeholder="Password" />
            <br />
            <button>Register</button>
        </div>
    );

};

export default Registration;