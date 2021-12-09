import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
       <Header />
      <div className="App">

        Async Redux Project
       <BookList/> 
      </div>
    </Router>
  );
}

export default App;