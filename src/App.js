import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Author from './components/Author'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <header class="masthead">
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to="/"><a className="nav-link"><b>Home</b></a></Link>
                </li>
                <li class="nav-item">
                  <Link to="/Author"><a className="nav-link"><b>Authors</b></a></Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="site-heading" style={{color:'#FF0000'}}>
          <h2>Welcome to my blog</h2>
            
</div>
        </header><br />
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

