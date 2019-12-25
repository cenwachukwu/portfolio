import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navContainer">
            <div className="navBarContainer">
                <div>
                    <Link to="/">
                        <h2 className="homeLogo">cenwachukwu</h2>
                    </Link>
                </div>
                <div className="NavLinks">
                    <ul className="NavBarLinks">
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
        </div>

    );
}

export default Navbar;
