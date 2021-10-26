import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

// General components
export const AppWrapper = styled.div`
  margin: 0;
  font-family: 'Century Gothic', sans-serif;
  background: #FFF3CD;
  display: grid;
  grid-template-rows: max-content auto min-content;
  height: 100%;
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Image = styled.img`
  height: ${props => props.height || '200px'};
  width: ${props => props.width || '200px'};
  object-fit: cover;
  object-position: 0 80%;
  border-radius: 1rem;
  border: 3px solid black;
`

export const PageWrapper = styled.div`
  display: grid;
`

export const ContentWrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
`

export const TextButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-family: 'Century Gothic', sans-serif;
  font-size: 1rem;
  text-decoration: underline;
`

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};

  & :not(:first-child){
    padding: ${props => props.notFirstPadding};
  }

  & div :not(:first-child){
    padding: ${props => props.listPadding};
  }
`

export const BrownButton = styled.button`
  background: #4D3E3E;
  color: white;
  padding: .5rem 2rem;
  border-radius: .5rem;
  cursor: pointer;
  border: none;
  font-family: 'Century Gothic', sans-serif;
  font-size: 1rem;
`

// Nav
export const Logo = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 2rem;
  text-decoration: none;
  color: black;
`
export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr min-content;
  grid-gap: 1rem;
  padding: 1rem 4rem;
  align-items: end;
  align-self: center;
`

export const NavLink = styled.p`
  color: black;
  text-decoration: none;
  font-family: 'Century Gothic', sans-serif;
  ${props => props.active && `
    color: black;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color:#FF926B;
    font-weight: bold;
  `}
`

export const BagCount = styled.div`
  position: relative;
  left: 21px;
  top: 19px;
  width: fit-content;
  background: #FFC38B;
  padding: 1px 5px;
  z-index: 1;
  font-size: 12px;
  border-radius: 40%;
  color: black;
  border: 1px solid black;
`

//Homepage
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
  max-width: 1000px;
  align-self: center;
  margin: auto auto;
`

export const ArrowButton = styled.button`
  background: black;
  color: white;
  border: none;
  height: 3rem;
  padding: .75rem;
  cursor: pointer;

`

//My Bag
export const BagItem = styled.div`
  display: grid;
  grid-template-columns: min-content auto max-content max-content;
  grid-gap: 1rem;
  align-items: center;
`

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 1rem;

  & p {
    margin: 0;
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 1rem;
  justify-content: end;
`

export const WishlistWrapper = styled.div`
  display: flex;

  & :not(:first-child) {
    padding-left: 1rem
  }

  & img {
    cursor: pointer;
  }
`

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`

export const BagList = styled.div`
  display: grid;
  grid-gap: 1rem;
`

//Modal
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 250px;
  min-height: 100px;
  padding: 1rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: white;
`
//Footer
export const Footer = styled.footer`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-gap: 2rem;
  align-items: center;
  background: #FFC38B;
  padding: 0 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`