import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <div>
                <Link to="/">
                    <h2>CEN</h2>
                </Link>
            </div>
            <div className="NavLinks">
                <ul className="NavBar">
                    <li>
                        <Link to="/#About">About</Link>
                    </li>
                    <li>
                        <Link to="/#Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/Resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;
