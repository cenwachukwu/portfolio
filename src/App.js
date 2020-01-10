import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Applications from './Applications/Applications';
import Navbar from './Navbar/Navbar';
import MobileNav from './MobileNav/MobileNav';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <MobileNav/> */}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Resume" exact component={Resume} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Applications" exact component={Applications} />
      </Router>
    </div>
  );
}

export default App;
