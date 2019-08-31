import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';

function App() {
  return (
    <>
      <Router>
      <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Article} />
      </Router>
    </>
  );
}

export default App;

