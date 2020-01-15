import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import MobileNav from '../MobileNav/MobileNav'
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
// import Header from "../images/IMG_0015.jpg";
import Header from "../images/GA14Nov-FullRes-4.jpg";


function Home() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar/>
      <MobileNav/>
      <div>
        <div className="aboutCatchPhrase2">
          <h3 className="aboutCatchPhraseHTag">Chiebuka Elizabeth Nwachukwu</h3>
        </div>
        <div className="aboutIconsContainerParent">
          <div className="aboutIconsContainer">
            <img src={Header} className="CenwachukwuPics" width='800' />
          </div>
        </div>
        <div className="brandStatementContainer">
          <p className="MeCatchWords">
            Software Developer | Creative | Budding Globe Trotter
          </p>
        </div>
      </div>
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