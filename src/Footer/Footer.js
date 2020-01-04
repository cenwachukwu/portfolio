import React from 'react';
import '../App.css';
import './Footer.css';

function Footer() {
    return (
        <div className="footerDivContainer">
            <div className="footerDiv">
                <a href="https://github.com/cenwachukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/cenwachukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://codepen.io/cenwachukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
            </div>
        </div>
    );
}

export default Footer;
