// SplashScreen.js
import React, { useState, useEffect } from 'react';
import DKSpinner from '../modules/DKSpinner.js';//in modules folder
import Home from '../modules/Home.jsx'

const SplashScreen = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate data fetching or any initial setup
        setTimeout(() => {
            setLoaded(true);
        }, 3000); // Adjust the timeout as needed
    }, []);

    return (
        <div>
            {loaded ? (<Home />): (<DKSpinner />)}
        </div>
    );
};

export default SplashScreen;
