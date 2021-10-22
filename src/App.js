import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';

function App() {
  
  return (
    <Router>
    <div>
      <Nav />

      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
