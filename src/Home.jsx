import React, { useState } from "react";
import {HomeGrid, Flex, ArrowButton, Image} from './Components'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Home= () => {
  let [promoIndex, setPromoIndex] = useState(0)
  setTimeout(() => setPromoIndex(promoIndex=== 2 ? 0 : promoIndex+1), 7000)

  const promoArray = [{"url": "/products/original", "name": "Original", "image": "https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
  {"url": "/products/blackberry", "name":"Blackberry", "image":"https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"},
  {"url": "/products/walnut", "name":"Walnut", "image":"https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80"}]

  return (
    <div>
      <div class="content">
        <HomeGrid>
          <div id="homeContent">
            <h1>Bun Bun Bake Shop</h1>
            <p>We are a small bakery that specializes in cinnamon rolls, from our famous original cinnamon rolls to a variety of artisan flavors. Our shop is located in Pittsburgh, PA and we ship fresh rolls anywhere in the Pittsburgh area. Visitors to our site should be able to buy cinnamon rolls by different flavors. </p>
          </div>
          <div id="promo">
          <p class="imageSubtitle">Featured Flavor</p>
          <Flex align='center'>
            <ArrowButton onClick={() => setPromoIndex(promoIndex=== 0 ? 2 : promoIndex-1)}>&#10094;</ArrowButton>
              <Flex direction='column' align='center'>
                <Link to={promoArray[promoIndex].url}>
                  <Image src={promoArray[promoIndex].image} alt={promoArray[promoIndex].name}/>
                </Link>
                <p class="imageSubtitle">{promoArray[promoIndex].name}</p>
              </Flex>
            <ArrowButton onClick={() => setPromoIndex(promoIndex=== 2 ? 0 : promoIndex+1)}>&#10095;</ArrowButton>
          </Flex>
          </div>
        </HomeGrid>
        <Link to="/products">
          <button class="centerButton brownButton">View Our Buns</button>
        </Link>
      <br />
      <br />
      <div class="largeSection" id="visitSection">
        <Link to="/visit">Visit Us</Link>
      </div>
      <div class="largeSection" id="contactSection">
      <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  </div>
  )
}

export default Home