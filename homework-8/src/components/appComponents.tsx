import styled from 'styled-components'

//792px width

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  font-family: 'Century Gothic', sans-serif;
  @media (max-width: 768px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
`

export const LeftWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 140px auto max-content;
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
  padding: 1rem 2rem;
  background: #BFE3DB;
  display: flex;
  justify-content: space-between;
`

export const RightWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  @media (max-width: 768px) {
    order: -1;
  }
`
export const CharacterChat = styled.div`
  background: #8AB0AE;
  padding: 2rem;
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 1rem;
`

interface textProps {
  small?: boolean
}
export const Text = styled.p<textProps>`
  margin: 0;
  font-size: ${props => props.small ? '.85rem' : '1rem'};
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
`

interface buttonProps {
  disabled?: boolean
}

export const StyledButton = styled.button<buttonProps>`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background: ${props => props.disabled ? '#aaa' : '#555C6E'};
  color: white;
  cursor: ${props => !props.disabled && 'pointer'};

  &:hover{
    background: ${props => props.disabled ? '#aaa' : '#89B0AE'};
  }
`
interface levelButtonProps {
  key: number
  completed: boolean
}
export const LevelButton = styled.button<levelButtonProps>`
  border: 3px solid #BFE3DB;
  background: ${props => props.completed ? '#BFE3DB' : 'none'};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin: 1rem;
  grid-gap: .5rem;
`

export const LevelModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`