import React from "react";
import { ContentWrapper } from "./Components";
import './App.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Bun from './Bun';

const Products = ({wishlistItems, setWishlistItems, myBagItems, setMyBagItems}) => {
  let match = useRouteMatch();
  return (
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Bun myBagItems={myBagItems} setMyBagItems={setMyBagItems} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />
        </Route>
        <Route path={match.path}>
        <ContentWrapper>
          <div id="bunGrid">
          <Link to="/products/original">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Original Bun"/>
                  <p className="cardText">Original</p>
                </div>
              </Link>
              <Link to="/products/blackberry">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80" alt="Blackberry Bun"/>
                  <p className="cardText">Blackberry</p>
                </div>
              </Link>
              <Link to="/products/walnut">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80" alt="Walnut Bun"/>
                  <p className="cardText">Walnut</p>
                </div>
              </Link>
              <Link to="/products/originalgf">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80" alt="Original Bun (Gluten Free)"/>
                  <p className="cardText">Original (GF)</p>
                </div>
              </Link>
              <Link to="/products/pumpkinspice">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Pumpkin Spice Bun"/>
                  <p className="cardText">Pumpkin Spice</p>
                </div>
              </Link>
              <Link to="/products/caramelpecan">
                <div className="card">
                  <img className="cardImage" src="https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Caramel Pecan Bun"/>
                  <p className="cardText">Caramel Pecan</p>
                </div>
              </Link>
            </div>
          </ContentWrapper>
        </Route>
      </Switch>
  )
}

export default Products