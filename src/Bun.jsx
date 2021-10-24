import React, { useEffect, useState }  from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

const Bun = ({addItems}) => {
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

  console.log(item)
  return (
    <body>
      <div class="content" id="bunDetails">
        <div class="breadcrumbs"><Link to="/products">Buns</Link> > {bun.name}</div>
        <h1 id="lessMarginBottom">{bun.name}</h1>
        <div id="detailedBunGrid">
          <div id="leftColumn">
            <img id="detailedImage" src={bun.image} alt={bun.name}/>
          </div>
          <div id="rightColumn">
            <p>Glaze</p>
            <select name="glaze" id="glazeSelect" value={glaze} onChange={(e) => setGlaze(e.target.value)}>
              {glazeOptions.map(glaze => <option value={glaze}>{glaze}</option>)}
            </select>
            <p>Quantity</p>
            <select name="quantity" id="quantitySelect" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {quantityOptions.map(glaze => <option value={glaze}>{glaze}</option>)}
            </select>
            <p>Price</p>
            <p>$5</p>
            <button class="brownButton" onClick={() => history.goBack()}>Back</button>
            <button class="brownButton" onClick={() => addItems(item)}>Add to Bag</button>
          </div>
        </div>
      </div>
    </body>
  )
}

const getBunInfo = (id) => {
  console.log(id)
  const buns = [{"id": "original", "name": "Original", "image": "https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
  {"id": "blackberry", "name":"Blackberry", "image":"https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"},
  {"id": "walnut", "name":"Walnut", "image":"https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80"},
  {"id": "original-gf", "name":"Original (GF)", "image":"https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"},
  {"id": "Pumpkinspice", "name":"Pumpkin Spice", "image":"https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
  {"id": "caramelpecan", "name":"Caramel Pecan", "image":"https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"}]
  return buns.filter(item => item.id === id)[0]
}

export default Bun