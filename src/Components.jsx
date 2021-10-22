import styled from 'styled-components'

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