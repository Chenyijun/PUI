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
  top: 28.5%;
  left: 50%;
  width: 50%;
  height: 71.5%;
  justify-content: ${props => props.cssInput};
  align-items: ${props => props.cssInput2};
  padding: 1rem;
  box-sizing: border-box;
`

export const MapFlexWrapper = styled(MapFlexOverlay)`
  background: #bb9e78;
  justify-content: space-around;
  align-items: end;
`

interface mapSquare {
  monster?: boolean,
  attack?:boolean,
  player?: string
}
export const Square = styled.div<mapSquare>`
  background: #bb9e78;
  height: 100%;
  width: 100%;
  ${(props) => (props.player || props.monster) && 
    `background-image: ${props.player ? `url(/${props.player}.svg)`: 'url(/slime.svg)'};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;`
  }

  img{
    height: 100%;
  }
`

interface attackProps {
  level: number
  cssInput?: string
  multiple?: boolean
}

export const Attack = styled.div<attackProps>`
  background-image: url(/fireball.svg);
  background-size: 75px;
  background-repeat: ${props => !props.multiple && 'no-repeat'};
  background-position: center;
  grid-column-start: ${props => props.level === 2 ? props.cssInput : '2'};
  grid-row: ${props => props.level === 3 && `1 / ${props.cssInput}`};
  z-index: 2;
`
interface shopProps {
  potion?: boolean
  guild?: boolean
  blacksmith?: boolean
}
export const Shop = styled.div<shopProps>`
  height: 100px;
  width: 100px;
  color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => props.potion ? 'url(/potionShop.svg)' : props.guild ? 'url(/guild.svg)' : 'url(/blacksmith.svg)'}
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

export const Sparkles = styled.img`
  display: flex;
  position: absolute;
  height: 100%;
  z-index: 3;

  @media (max-width: 768px) {
    left: 25%;
  }
`

export const Ground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const FlexGround = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

export const FlexMap = styled(FlexGround)`
  background: #bb9e78;
  justify-content: space-around;
  align-items: end;
`

export const FlexCharacters = styled(FlexGround)<flexProps>`
  justify-content: ${props => props.cssInput};
  align-items: ${props => props.cssInput2};
`

export const ResponsiveMap = styled.div`
  position: sticky;
  top: 1rem;
  min-width: 300px;
  min-height: 300px;
  overflow: hidden;
`