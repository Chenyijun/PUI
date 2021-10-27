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
  useEffect(() => { //change item whenever glaze or quantity is updated
    setShowNoItem(myBagItems.length < 1)
  }, [myBagItems]) /* eslint react-hooks/exhaustive-deps: "off" */

  return (
    <PageWrapper>
      <ContentWrapper>
        <h1>My Bag</h1>
        {showNoItem ? <p>No item in bag</p>: 
        <BagList>
          {myBagItems.map(item => <BagItem>
          <Image height='100px' width='100px' src={item.image} />
          <ItemDetails>
            <p><b>{item.name}</b></p>
            <p><b>Quantity</b></p>
            <p><b>Price</b></p>
            <p>{item.glaze}</p>
            <p>{item.quantity}</p>
            <p>${item.quantity * 5}</p>
          </ItemDetails>
          <TextButton>Edit</TextButton>
          <TextButton>Remove</TextButton>
        </BagItem>)}
        <br />
        <p>Total Price $5</p>
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
          {quantityOptions.map(glaze => <option key={glaze} value={glaze}>{glaze}</option>)}
        </select>
        <p>Price</p>
        <p>$5</p>
        <button className="brownButton" onClick={() => addToBag()}>Add to Bag</button>
    </div>
    </TwoColGrid>
  )
}

export default Bag