import React, {FC} from "react";
import {MapFlexOverlay, MapFlexWrapper, Character, MapWrapper, Square, Attack, Shop, Sparkles} from './components/mapComponents'

type Props = {
  level: number,
  cssInput: string;
  cssInput2?: string;
  correct: boolean;
}
const WorldMap:FC<Props> = ({level, cssInput, cssInput2, correct}) => {
  if (level === 1){
    return (
      <>
      {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
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
      {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
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
