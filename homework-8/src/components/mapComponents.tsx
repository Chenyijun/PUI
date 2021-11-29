import styled from 'styled-components'

export const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1px;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 50%;
  height: 70%;
`

interface mapSquare {
  player?: boolean,
  monster?: boolean,
  attack?:boolean,
}
export const Square = styled.div<mapSquare>`
  background: ${(props) => props.player ? 'blue' : props.monster ? 'red' : '#FFE5CD'};
  height: 100%;
  width: 100%;
`

interface attackProps {
  justify?: string
}

export const Attack = styled.div<attackProps>`
  background: yellow;
  grid-column-start: ${props => props.justify};
  z-index: 2;
`