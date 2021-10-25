import React, { useEffect, useState }  from "react";
import { Flex, TextButton } from './Components'
import './App.css'
import { getBunInfo } from './helperFunctions';

import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

const Bun = ({wishlistItems, setWishlistItems, myBagItems, setMyBagItems}) => {
  let { id } = useParams();
  let bun = getBunInfo(id) //get name and image from id
  const glazeOptions = ["None", "Sugar-milk", "Vanilla-milk", "Double-Chocolate"]
  const quantityOptions = [1, 3, 6, 12]
  let history = useHistory() //for back button
  let [glaze, setGlaze] = useState("None")
  let [quantity, setQuantity] = useState(1)
  let [item, setItem] = useState({...bun, "glaze": glaze, "quantity": quantity})
  useEffect(() => { //change item whenever glaze or quantity is updated
    setItem({...item, "glaze": glaze, "quantity": quantity})
  }, [glaze, quantity])
  return (
    <body>
      <div class="content" id="bunDetails">
        <div class="breadcrumbs"><Link to="/products">Buns</Link> &gt; {bun.name}</div>
        <h1 id="lessMarginBottom">{bun.name}</h1>
        <div id="detailedBunGrid">
          <Flex align='start' direction='column'>
            <img id="detailedImage" src={bun.image} alt={bun.name}/>
            <TextButton onClick={()=> wishlistItems.includes(bun.id) ? setWishlistItems(wishlistItems.filter(item => item !== bun.id)) : setWishlistItems([...wishlistItems, bun.id])}>{wishlistItems.includes(bun.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</TextButton>
          </Flex>
          <div id="rightColumn">
            <p>Glaze</p>
            <select name="glaze" id="glazeSelect" value={glaze} onChange={(e) => setGlaze(e.target.value)}>
              {glazeOptions.map(glaze => <option key={glaze} value={glaze}>{glaze}</option>)}
            </select>
            <p>Quantity</p>
            <select name="quantity" id="quantitySelect" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {quantityOptions.map(glaze => <option key={glaze} value={glaze}>{glaze}</option>)}
            </select>
            <p>Price</p>
            <p>$5</p>
            <button class="brownButton" onClick={() => history.goBack()}>Back</button>
            <button class="brownButton" onClick={() => setMyBagItems([...myBagItems, item])}>Add to Bag</button>
          </div>
        </div>
      </div>
    </body>
  )
}

// const getBunInfo = (id) => {
//   const buns = [{"id": "original", "name": "Original", "image": "https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
//   {"id": "blackberry", "name":"Blackberry", "image":"https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"},
//   {"id": "walnut", "name":"Walnut", "image":"https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80"},
//   {"id": "original-gf", "name":"Original (GF)", "image":"https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"},
//   {"id": "Pumpkinspice", "name":"Pumpkin Spice", "image":"https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
//   {"id": "caramelpecan", "name":"Caramel Pecan", "image":"https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"}]
//   return buns.filter(item => item.id === id)[0]
// }

export default Bun