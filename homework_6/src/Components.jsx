import styled from 'styled-components'

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr min-content;
  grid-gap: 1rem;
  padding: 1rem 4rem;
  align-items: center;
  align-self: center;
`

export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
  max-width: 1000px;
  align-self: center;
  margin: auto auto;
`
export const Image = styled.img`
  height: ${props => props.height || '200px'};
  width: ${props => props.width || '200px'};
  object-fit: cover;
  object-position: 0 80%;
  border-radius: 1rem;
  border: 3px solid black;
`

export const ArrowButton = styled.button`
  background: black;
  color: white;
  border: none;
  height: 3rem;
  padding: .75rem;
  cursor: pointer;

`

export const PageWrapper = styled.div`
  padding: 2rem;
`

export const ContentWrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
`

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

export const TextButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-family: 'Century Gothic', sans-serif;
  font-size: 1rem;
  text-decoration: underline;
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 1rem;
  justify-content: end;
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

export const WishlistWrapper = styled.div`
  display: flex;

  & :not(:first-child) {
    padding-left: 1rem
  }

  & img {
    cursor: pointer;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};

  & :not(:first-child) {
    padding: ${props => props.notFirstPadding};
  }
`