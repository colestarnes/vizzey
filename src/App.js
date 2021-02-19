import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Feed from './pages/Feed' 
import Portfolio from './pages/Portfolio'
import './App.css'


function App() {


  return ( 
    <div className="app">
      <profileItems/>
      <Navbar/> 
      <Feed/>
      </div>
  );
}

export default App;
