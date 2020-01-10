import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from './cenwachukwuu-resume.pdf';
import "./Hamburger.css";
import '../App.css';

class Hamburger extends Component {
    render() {
        return (
            <div>
                <div className="Hamburger__wrapper">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div className="hamburger-lines"></div>
                    </div>
                    <div className="fixednavbar">
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
}

export default Hamburger;