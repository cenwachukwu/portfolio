import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Applications from './Applications'

function App() {
  return (
    <div className="App">
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
