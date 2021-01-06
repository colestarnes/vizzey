import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {


  return ( 
    
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
