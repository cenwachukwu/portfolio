import React from 'react';
import '../App.css';
import './DrawerToggleButton.css';
import { Link } from 'react-router-dom';
import Resume from './cenwachukwuu-resume.pdf';

function DrawerToggleButton() {
    return (
        <div>
            <div class="wrapper">
                <input type="checkbox" class="toggler" />
                <div class="hamburger">
                    <div></div>
                </div>
                <div class="fixednavbar">
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://cenwachukwu.com/#About">About</a>
                                </li>
                                <li>
                                    <a href="https://cenwachukwu.com/#Portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                                </li>
                                <li>
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerToggleButton