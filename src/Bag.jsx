import {PageWrapper, ContentWrapper, BagItem, Image, ItemDetails, TextButton, ButtonWrapper, BrownButton, Flex, WishlistWrapper} from './Components'
import './App.css'
import {
  Link,
  useHistory
} from "react-router-dom";

const Bag = ({wishlistItems}) => {
  let history = useHistory()
  const getBunInfo = (id) => {
    const buns = [{"id": "original", "name": "Original", "image": "https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
    {"id": "blackberry", "name":"Blackberry", "image":"https://images.unsplash.com/photo-1630182266697-92508c01e2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"},
    {"id": "walnut", "name":"Walnut", "image":"https://images.unsplash.com/photo-1593529323824-24cda51553e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80"},
    {"id": "original-gf", "name":"Original (GF)", "image":"https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"},
    {"id": "Pumpkinspice", "name":"Pumpkin Spice", "image":"https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"},
    {"id": "caramelpecan", "name":"Caramel Pecan", "image":"https://images.unsplash.com/photo-1618256747711-c4195a69ceff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80"}]
    return buns.filter(item => item.id === id)[0]
  }
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1>My Bag</h1>
        <BagItem>
          <Image height='100px' width='100px' src="https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" />
          <ItemDetails>
            <p><b>Original Bun</b></p>
            <p><b>Quantity</b></p>
            <p><b>Price</b></p>
            <p>Sugar-glaze</p>
            <p>1</p>
            <p>$5</p>
          </ItemDetails>
          <TextButton>Edit</TextButton>
          <TextButton>Remove</TextButton>
        </BagItem>
        <hr />
        <p>Total Price $5</p>
        <ButtonWrapper>
          <BrownButton onClick={()=>history.goBack()}>Back</BrownButton>
          <BrownButton>Checkout</BrownButton>
        </ButtonWrapper>
        <br />
        <Flex notFirstPadding='0 0 0 1rem' align='baseline'>
          <h2>My Wishlist</h2>
          {wishlistItems.length !== 0 && <p>Click on the image to add to cart</p>}
        </Flex>
        <WishlistWrapper>
          {wishlistItems.map(item => <Image height='100px' width='100px' src={getBunInfo(item).image} />)}
          {wishlistItems.length == 0 && <Link to="/products">Nothing here. :( Go to buns to add a bun to wishlist</Link>}
        </WishlistWrapper>
      </ContentWrapper>

  </PageWrapper>
  )
}

export default Bag