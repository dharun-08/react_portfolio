// NavBar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/Dk-logos_transparent.png'

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);
    const linkStyle = {
        fontFamily: 'Roboto, sans-serif',
        // Add any other styles as needed
    };
    return (
        <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
            <ul className="flex p-4 bg-gray-800 justify-between items-center">
                <li className="text-white cursor-pointer">
                    <Link to="/" className='flex'>
                        <img src={LogoImg} alt="Home" className="h-14 w-13" /><span className='flex pt-3.5' style={linkStyle}>Dharun Kumar</span>
                    </Link>
                </li>
                <div className="flex">
                    <li className="mr-4 text-white cursor-pointer hover:text-orange-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-4 text-white cursor-pointer hover:text-orange-500">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mr-4 text-white cursor-pointer hover:text-orange-500">
                        <Link to="/project">Project</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
