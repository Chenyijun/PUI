import {PageWrapper, ContentWrapper, BagItem, Image, ItemDetails, TextButton, ButtonWrapper, BrownButton, Flex, WishlistWrapper} from './Components'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Bag= () => {
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
          <BrownButton>Back</BrownButton>
          <BrownButton>Checkout</BrownButton>
        </ButtonWrapper>
        <br />
        <Flex notFirstPadding='0 0 0 1rem' align='baseline'>
          <h2>My Wishlist</h2>
          <p>Click on the image to add to cart</p>
        </Flex>
        <WishlistWrapper>
          <Image height='100px' width='100px' src="https://images.unsplash.com/photo-1577385384956-7e9fab6f7e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80" />
        </WishlistWrapper>
      </ContentWrapper>

  </PageWrapper>
  )
}

export default Bag