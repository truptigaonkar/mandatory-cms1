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
      <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item"><Link to="/"><a class="nav-link">Posts</a></Link></li>
            <li class="nav-item .font-weight-bold"><Link to="/Author"><a class="nav-link">Authors</a></Link></li>
          </ul>
        </nav><br />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/article/:id" component={Article} />
          <Route path="/Author" component={Author} />
        </div>
      </Router>

    </>
  );
}

export default App;

