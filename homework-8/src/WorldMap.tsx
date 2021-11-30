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
        <Character>Warrier</Character>
        <Character>Cleric</Character>
        <Character>Mage</Character>
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
        <Attack cssInput={cssInput}>ATTACK</Attack>
      </MapWrapper>
      <MapWrapper>
        <Square player>1</Square>
        <Square>2</Square>
        <Square>3</Square>
        <Square>4</Square>
        <Square>5</Square>
        <Square>6</Square>
        <Square>7</Square>
        <Square>8</Square>
        <Square monster>9</Square>
      </MapWrapper>
      </>
    )
  }
  return (
    <div></div>
  )
}

export default WorldMap;
