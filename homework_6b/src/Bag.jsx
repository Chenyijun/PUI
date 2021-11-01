import React, { useEffect, useState } from "react";
import {PageWrapper, ContentWrapper, BagItem, Image, ItemDetails, TextButton, ButtonWrapper, BrownButton, Flex, WishlistWrapper, TwoColGrid, BagList} from './Components'
import './App.css'
import {
  Link,
  useHistory
} from "react-router-dom";
import Modal from './Modal'
import { getBunInfo, getQuantities, getGlazes } from './helperFunctions';

const Bag = ({wishlistItems, myBagItems, setMyBagItems}) => {
  let history = useHistory()
  const [showModal, setShowModal] = useState(false)
  const [showNoItem, setShowNoItem] = useState(true)
  const [totalPrice, setTotalPrice] = useState(5)
  useEffect(() => { //change item whenever glaze or quantity is updated
    setShowNoItem(myBagItems.length < 1)
    updateTotalPrice()
  }, [myBagItems]) /* eslint react-hooks/exhaustive-deps: "off" */

  const updateTotalPrice = () => {
    let price = 0
    myBagItems.map(item => price = price + (item.quantity * 5))
    setTotalPrice(price)
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <h1>My Bag</h1>
        {showNoItem ? <p>No item in bag</p>: 
        <BagList>
          {myBagItems.map((item, i) => <BunItem key={`${item.name}-${i}`} item={item} index={i} myBagItems={myBagItems} setMyBagItems={setMyBagItems}/>)}
        <br />
        <p><b>Total Price</b> ${totalPrice}</p>
        </BagList>}
        <ButtonWrapper>
          <BrownButton onClick={()=>history.goBack()}>Back</BrownButton>
          <BrownButton disabled={myBagItems.length === 0}>Checkout</BrownButton>
        </ButtonWrapper>
        <br />
        <Flex notFirstPadding='0 0 0 1rem' align='baseline'>
          <h2>My Wishlist</h2>
          {wishlistItems.length !== 0 && <p>Click on the image to add to cart</p>}
        </Flex>
        <WishlistWrapper>
          {wishlistItems.map(item => <><Image height='100px' width='100px' key={item} src={getBunInfo(item).image} onClick={()=> setShowModal(true)} />
          <Modal isOpen={showModal} toggleModal={()=> setShowModal(false)}>
            <ModalContent bun={getBunInfo(item)} myBagItems={myBagItems} setMyBagItems={setMyBagItems} setShowModal={setShowModal} />
          </Modal></>)}
          {wishlistItems.length === 0 && <Link to="/products">Nothing here. :( Go to buns to add a bun to wishlist</Link>}
        </WishlistWrapper>
      </ContentWrapper>
  </PageWrapper>
  )
}

const BunItem = ({item, index, myBagItems, setMyBagItems}) => {
  const glazeOptions = getGlazes()
  const quantityOptions = getQuantities()
  let [bun, setBun] = useState(item)
  let [glaze, setGlaze] = useState(item.glaze)
  let [quantity, setQuantity] = useState(item.quantity)
  let [editMode, setEditMode] = useState(false)
  let newMyBagItems = [...myBagItems]

  useEffect(() => { //change item whenever glaze or quantity is updated
    setBun({...bun, "glaze": glaze, "quantity": quantity})
  }, [glaze, quantity])

  const saveBun = () => {
    newMyBagItems[index] = bun
    setMyBagItems(newMyBagItems)
    setEditMode(false)
  }

  const removeBun = () => {
    newMyBagItems.splice(index, 1)
    setMyBagItems(newMyBagItems)
  }

  return (
    <BagItem>
      <Image height='100px' width='100px' src={item.image} />
      <ItemDetails>
        <p><b>{item.name}</b></p>
        <p><b>Quantity</b></p>
        <p><b>Price</b></p>
        {editMode ?
          <select name="glaze" id="glazeSelect" value={glaze} onChange={(e) => setGlaze(e.target.value)}>
            {glazeOptions.map(glaze => <option key={glaze} value={glaze}>{glaze}</option>)}
          </select>
          : <p>{bun.glaze}</p>}
        {editMode ?
          <select name="quantity" id="quantitySelect" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {quantityOptions.map(quantity => <option key={quantity} value={quantity}>{quantity}</option>)}
          </select>
          : <p>{bun.quantity}</p>
        }
        <p>${bun.quantity * 5}</p>
      </ItemDetails>
      <TextButton onClick={() => editMode ? saveBun() : setEditMode(true)}>{editMode ? "Done" : "Edit"}</TextButton>
      <TextButton onClick={() => editMode ? setEditMode(false) : removeBun()}>{editMode ? "Cancel" : "Remove"}</TextButton>
  </BagItem>
  )
}

const ModalContent = ({bun, myBagItems, setMyBagItems, setShowModal}) => {
  const glazeOptions = getGlazes()
  const quantityOptions = getQuantities()
  let [glaze, setGlaze] = useState("None")
  let [quantity, setQuantity] = useState(1)
  let [item, setItem] = useState({...bun, "glaze": glaze, "quantity": quantity})
  useEffect(() => { //change item whenever glaze or quantity is updated
    setItem({...item, "glaze": glaze, "quantity": quantity})
  }, [glaze, quantity])

  const addToBag = () => {
    setMyBagItems([...myBagItems, item])
    setShowModal(false)
  }
  return (
    <TwoColGrid>
      <img id="detailedImage" src={bun.image} alt={bun.name}/>
      <div>
        <h3>{bun.name}</h3>
        <p>Glaze</p>
        <select name="glaze" id="glazeSelect" value={glaze} onChange={(e) => setGlaze(e.target.value)}>
          {glazeOptions.map(glaze => <option key={glaze} value={glaze}>{glaze}</option>)}
        </select>
        <p>Quantity</p>
        <select name="quantity" id="quantitySelect" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {quantityOptions.map(quantity => <option key={quantity} value={quantity}>{quantity}</option>)}
        </select>
        <p>Price</p>
        <p>$5</p>
        <button className="brownButton" onClick={() => addToBag()}>Add to Bag</button>
    </div>
    </TwoColGrid>
  )
}

export default Bag