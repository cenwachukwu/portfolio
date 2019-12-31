import React from 'react';
import DrawerToggleButton from './DrawerToggleButton'
import '../App.css';
import './Navbar.css';

import { Link } from 'react-router-dom';
import Resume from '../cenwachukwuu-resume.pdf'

function Navbar(props) {
    return (
        <div className="navContainer">
            <div>
                {window.innerWidth < 769 ? <div><DrawerToggleButton /></div> :
                    <div className="navBarContainer">
                        <div>
                            <Link to="/">
                                <h2 className="homeLogo">cenwachukwu</h2>
                            </Link>
                        </div>
                        <div className="NavLinks">
                            <ul className="NavBarLinks">
                                <li>
                                    <a href="https://cenwachukwu.netlify.com/#About">About</a>
                                </li>
                                <li>
                                    <a href="https://cenwachukwu.netlify.com/#Portfolio">Portfolio</a>
                                </li>
                                <li>
                                    {window.innerWidth < 768 ? <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a> :
                                        <Link to="/Resume">Resume</Link>}
                                </li>
                                <li>
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>}
            </div>
        </div>

    );
}

export default Navbar;
