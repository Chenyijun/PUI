import React, { useEffect, useState } from "react";
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
  let [myBagItems, setMyBagItems] = useState([])
  let [wishlistItems, setWishlistItems] = useState([])
  console.log("Wishlist", wishlistItems)
  console.log("mybag", myBagItems)
  let [bagCount, setBagCount] = useState(0)

  useEffect(() => { //update bagcount for nav
    setBagCount(myBagItems.length)
  }, [myBagItems])

  return (
    <Router>
    <div>
      <Nav bagCount={bagCount} />

      <Switch>
        <Route path="/products">
          <Products myBagItems={myBagItems} setMyBagItems={setMyBagItems} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />
        </Route>
        <Route path="/visit">
          <Visit />
        </Route>
        <Route path="/bag">
          <Bag />
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
