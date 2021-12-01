import React, {FC} from 'react';
import {MapFlexOverlay, MapFlexWrapper, Character, MapWrapper, Square, Attack, Shop} from './components/mapComponents'

type Props = {
  level: number,
  cssInput: string;
  cssInput2?: string;
}
const WorldMap:FC<Props> = ({level, cssInput, cssInput2}) => {
  console.log(cssInput)
  console.log(level)
  if (level === 1){
    return (
      <>
      <MapFlexOverlay cssInput={cssInput} cssInput2={cssInput2}>
        <Character><img src="warrior.svg" alt='warrior'/></Character>
        <Character><img src="healer.svg" alt='healer'/></Character>
        <Character><img src="mage.svg" alt='mage'/></Character>
    </MapFlexOverlay>
      <MapFlexWrapper>
        <Shop>Guild</Shop>
        <Shop>Potion Shop</Shop>
        <Shop>Blacksmith</Shop>
      </MapFlexWrapper>
      </>
    )
  }
  if (level === 2){
    return (
      <>
      <MapWrapper>
        <Attack cssInput={cssInput}></Attack>
      </MapWrapper>
      <MapWrapper>
        <Square player></Square>
        <Square></Square>
        <Square monster></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </MapWrapper>
      </>
    )
  }
  return (
    <div></div>
  )
}

export default WorldMap;
