import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Portfolio() {
    return (
        <div className="portfolioContainerParent">
            <div className="portfolioContainer">
                <h2 className="portfolioContainerHtag">Portfolio</h2>
                <div className="portfolioIconContainer">
                    <div className="portfolioIcon">
                        <Link to="/Applications">
                            <div className="portfolioImage portfolioImage1"></div>
                        </Link>
                        <p>
                            <Link to="/Applications" className="portfolioATag">
                                Applications
                            </Link>
                        </p>
                    </div>
                    <div className="portfolioIcon">
                        <a href="https://medium.com/@cenwachukwuu" target="_blank">
                        <div className="portfolioImage portfolioImage2"></div>
                        </a>
                        <p>
                            <a href="https://medium.com/@cenwachukwuu" target="_blank" className="portfolioATag">
                                Blog Posts
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
