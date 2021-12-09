import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
       <Header />
      <div className="App">

        Async Redux Project
      </div>
    </Router>
  );
}

export default App;