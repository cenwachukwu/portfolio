import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <header>
        <div className="fixedHeader">
          <div className="headertext">
            <p className="headertextptag">Hi, I'm Chiebuka</p>
            <p className="headertextptag">Software Engineer | Creative | Biologist</p>
            <Link to="/Applications">
              <button>
                Take a peak at my work
              </button>
            </Link>
          </div>
        </div>
      </header>
      <Navbar />
      <About />
      <Portfolio />
      <div className="contactBoxContainer">
        <div className="contactBox">
          <p>Feel free to drop by and say hi</p>
          <Link to="/Contact">
            <button className="sendMessageButton">
              send me a message
          </button>
          </Link>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Home;