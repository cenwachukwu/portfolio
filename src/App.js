import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Views/Home/Home';
import Resume from './Views/Resume/Resume';
import Contact from './Views/Contact/Contact';
import Applications from './Applications/Applications';
import Navbar from './Components/Navbar/Navbar';
import MobileNav from './Components/MobileNav/MobileNav';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <MobileNav/> */}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Resume" exact component={Resume} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Applications" exact component={Applications} />
      </Router>
    </div>
  );
}

export default App;
