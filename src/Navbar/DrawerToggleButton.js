import React from 'react';
import '../App.css';
import './DrawerToggleButton.css';
import { Link } from 'react-router-dom';
import Resume from '../cenwachukwuu-resume.pdf';

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
                                <li><a href="#">IvyPark</a></li>
                                <li><a href="#">BeyGood</a></li>
                                <li><a href="#">Homecoming</a></li>
                                <li><a href="#">Lion King - The Gift</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerToggleButton