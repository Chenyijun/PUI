import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Visit from './Visit.jsx'
import Bag from './Bag.jsx'

function App() {
  let [bagItems, setBagItems] = useState([])

  const addItem = (item) => {
    setBagItems([...bagItems, item])
  }
  return (
    <Router>
    <div>
      <Nav bagItems={bagItems} />

      <Switch>
        <Route path="/products">
          <Products addItem={addItem}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/visit">
          <Visit />
        </Route>
        <Route path="/bag">
          <Bag />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
