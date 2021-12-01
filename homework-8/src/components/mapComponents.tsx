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
interface flexProps {
  cssInput?: string
  cssInput2?: string
}
export const MapFlexOverlay = styled.div<flexProps>`
  display: flex;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 50%;
  height: 70%;
  justify-content: ${props => props.cssInput};
  align-items: ${props => props.cssInput2};
`

export const MapFlexWrapper = styled(MapFlexOverlay)`
  background: #bb9e78;
  justify-content: space-around;
  align-items: end;
`

interface mapSquare {
  player?: boolean,
  monster?: boolean,
  attack?:boolean,
}
export const Square = styled.div<mapSquare>`
  background: #bb9e78;
  height: 100%;
  width: 100%;
  ${(props) => (props.player || props.monster) && 
    `background-image: ${props.player ? 'url(/mage.svg)' : 'url(/slime.svg)'};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;`
  }

  img{
    height: 100%;
  }
`

interface attackProps {
  cssInput?: string
}

export const Attack = styled.div<attackProps>`
  background-image: url(/fireball.svg);
  background-size: 75px;
  background-repeat: no-repeat;
  background-position: center;
  grid-column-start: ${props => props.cssInput};
  z-index: 2;
`

export const Shop = styled.div`
  height: 100px;
  width: 100px;
  color: white;
  background: black;
`

export const Character = styled.div`
  height: 100px;
  width: 100px;
  color: white;
  z-index: 2;
  img {
    height: 100%;
  }
`