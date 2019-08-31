import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Author from './components/Author'

function App() {
  return (
    <>
      <Router>
      <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Author">Authors</Link></li>
            </ul>
          </nav>
        <Route exact path="/" component={Home} />
        <Route path="/article/:id" component={Article} />
        <Route path="/Author" component={Author}/>
      </Router>
    </>
  );
}

export default App;

