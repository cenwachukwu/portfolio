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
      <div className="fixedHeader">
        <p>Hi, I'm Chiebuka but you can always call me Chi-Chi</p>
        <p>Software Engineer | Creative | Biologist</p>
        <Link to="/#Portfolio">
          <button>
            Check out my work
          </button>
        </Link>
      </div>
      <Navbar />
      <About />
      <Portfolio />
      <div className="contactBox">
        <p>Feel free to drop by and say hi</p>
        <Link to="/Contact">
          <button>
            send me a message
          </button>
        </Link>
      </div>
      <Footer />

    </div>
  );
}

export default Home;