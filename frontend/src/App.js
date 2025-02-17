import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home/';
import AboutPage from './About/';
import LoginPage from './Login/';


function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/About/" component={AboutPage} />
      <Route path="/Login/LoginPage.js" component={LoginPage} />
      <div>
        <p>
          Hello?
        </p>
      </div>
    </div>
  );
}

export default App;
