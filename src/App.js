import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';


function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <div>
        <p>
          Hello?
        </p>
      </div>
    </div>
  );
}

export default App;
