import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const routing = (
  <BrowserRouter>
    <ScrollToTop>
      <div>
        <h3>Clue Mediator</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </ScrollToTop>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));