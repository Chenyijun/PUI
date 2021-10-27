import React, { useEffect, useState }  from "react";
import { ContentWrapper, Flex, TextButton, Toast, BrownButton } from './Components'
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
  let [showToast, setShowToast] = useState(false)
  
  useEffect(() => { //change item whenever glaze or quantity is updated
    setItem({...item, "glaze": glaze, "quantity": quantity})
  }, [glaze, quantity]) /* eslint react-hooks/exhaustive-deps: "off" */

  const addToBag = () => {
    setMyBagItems([...myBagItems, item])
    setShowToast(true)
    setTimeout(() => {setShowToast(false)}, 1000)
  }

  return (
    <ContentWrapper>
      <div className="content" id="bunDetails">
        <div className="breadcrumbs"><Link to="/products">Buns</Link> &gt; {bun.name}</div>
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
              {quantityOptions.map(quatityNum => <option key={quantityNum} value={quantityNum}>{quantityNum}</option>)}
            </select>
            <p>Price</p>
            <p>${5 * quantity}</p>
            <BrownButton onClick={() => history.goBack()}>Back</BrownButton>
            <BrownButton onClick={() => addToBag()}>Add to Bag</BrownButton>
          </div>
        </div>
        <Toast show={showToast}>Item added to cart!</Toast>
      </div>
    </ContentWrapper>
  )
}
export default Bun