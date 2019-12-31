import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="App">
      <header>
        <div className="fixedHeader">
          {/* <div className="headertext">
            <p className="headertextptag">Hi, I'm Chiebuka</p>
            <p className="headertextptag">Software Engineer | Creative | Biologist</p>
            <a href="#Portfolio">
              <button>
                Take a peak at my work
              </button>
            </a>
          </div> */}
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