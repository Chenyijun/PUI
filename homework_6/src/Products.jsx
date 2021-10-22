import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Bun from './Bun';

const Products = () => {
  let match = useRouteMatch();
  console.log(match.path)
  return (
      <Switch>
        <Route path={`${match.path}/:title`}>
          <Bun />
        </Route>
        <Route path={match.path}>
        <div id="bunGrid">
                <a href="originalBun.html">
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Original Bun"/>
                <p class="cardText">Original</p>
              </div>
            </a>
            <a>
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80" alt="Blackberry Bun"/>
                <p class="cardText">Blackberry</p>
              </div>
            </a>
            <a>
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80" alt="Walnut Bun"/>
                <p class="cardText">Walnut</p>
              </div>
            </a>
            <a>
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80" alt="Original Bun (Gluten Free)"/>
                <p class="cardText">Original (GF)</p>
              </div>
            </a>
            <a>
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Pumpkin Spice Bun"/>
                <p class="cardText">Pumpkin Spice</p>
              </div>
            </a>
            <a>
              <div class="card">
                <img class="cardImage" src="https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Caramel Pecan Bun"/>
                <p class="cardText">Caramel Pecan</p>
              </div>
            </a>
          </div>
        </Route>
      </Switch>
  )
}

export default Products