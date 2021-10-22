import {HomeGrid, Image} from './Components'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Home= () => {
  return (
    <div>
      <div class="content">
        <HomeGrid>
          <div id="homeContent">
            <h1>Bun Bun Bake Shop</h1>
            <p>We are a small bakery that specializes in cinnamon rolls, from our famous original cinnamon rolls to a variety of artisan flavors. Our shop is located in Pittsburgh, PA and we ship fresh rolls anywhere in the Pittsburgh area. Visitors to our site should be able to buy cinnamon rolls by different flavors. </p>
          </div>
          <div id="promo">
            <Link to="/products/original">
              <Image src="https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" alt="Original Bun"/>
            </Link>
            <p class="imageSubtitle">Featured Flavor: Original</p>
          </div>
        </HomeGrid>
      <button class="centerButton brownButton">View Our Buns</button>
      <br />
      <br />
      <div class="largeSection" id="visitSection">
        <a href="visit.html">Visit Us</a>
      </div>
      <div class="largeSection" id="contactSection">
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
  </div>
  )
}

export default Home