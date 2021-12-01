import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  font-family: 'Century Gothic', sans-serif;
`

export const LeftWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content max-content auto max-content;
`

export const Header = styled.div`
  background: #BFE3DB;
  padding: 1rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 1rem;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`

export const Instructions = styled.div`
  background: #BFE3DB;
  padding: 2rem;
`

export const Footer = styled.div`
  padding: 2rem;
  background: #BFE3DB;
`

export const RightWrapper = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
`
export const CharacterChat = styled.div`
  background: #8AB0AE;
  padding: 2rem;
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 1rem;
`

export const Text = styled.p`
`

export const CharacterImage = styled.img`
  height: 150px;
  width: 150px;
`

export const LevelWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  height: fit-content;
  align-items: center;
  grid-gap: .25rem;

  button{
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #aaa;
  }
`