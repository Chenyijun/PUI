import React, {FC} from "react";
import {Character, Square, Attack, Shop, Sparkles, Ground, FlexCharacters, FlexMap, ResponsiveMap} from './components/mapComponents'

type Props = {
  level: number,
  cssInput: string;
  cssInput2?: string;
  correct: boolean;
}
const WorldMap:FC<Props> = ({level, cssInput, cssInput2, correct}) => {
  if (level === 1){
    return (
      <ResponsiveMap>
      {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
        <FlexCharacters level={1} cssInput={cssInput} cssInput2={cssInput2}>
          <Character><img src="warrior.svg" alt='warrior'/></Character>
          <Character><img src="healer.svg" alt='healer'/></Character>
          <Character><img src="mage.svg" alt='mage'/></Character>
      </FlexCharacters>
      <FlexMap>
        <Shop guild></Shop>
        <Shop potion></Shop>
        <Shop blacksmith></Shop>
      </FlexMap>
      </ResponsiveMap>
    )
  }
  if (level === 2){
    return (
      <ResponsiveMap>
        {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
        <Ground>
          <Attack level={2} cssInput={cssInput}></Attack>
        </Ground>
        <Ground>
          <Square player='mage'></Square>
          <Square></Square>
          <Square monster></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Ground>
      </ResponsiveMap>
    )
  }
  if (level === 3){
    return (
      <ResponsiveMap>
        {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
        <Ground>
          <Attack level={3} multiple cssInput={cssInput}></Attack>
        </Ground>
        <Ground>
          <Square player='mage'></Square>
          <Square></Square>
          <Square monster></Square>
          <Square player='warrior'></Square>
          <Square></Square>
          <Square monster></Square>
          <Square player='healer'></Square>
          <Square></Square>
          <Square monster></Square>
        </Ground>
      </ResponsiveMap>
    )
  }
  if (level === 4){
    return (
      <ResponsiveMap>
      {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
        <FlexCharacters level={4} cssInput={cssInput}>
          <Character><img src="warrior.svg" alt='warrior'/></Character>
          <Character><img src="healer.svg" alt='healer'/></Character>
      </FlexCharacters>
      <FlexMap>
        <Character><img src="slime.svg" alt='slime monster'/></Character>
      </FlexMap>
      </ResponsiveMap>
    )
  }
  if (level === 5){
    return (
      <ResponsiveMap>
        {correct && <Sparkles src="https://c.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"></Sparkles>}
        <Ground>
          <Attack type='heal' level={5} cssInput={cssInput} cssInput2={cssInput2}></Attack>
        </Ground>
        <Ground>
          <Square player='healer'></Square>
          <Square></Square>
          <Square></Square>
          <Square ></Square>
          <Square></Square>
          <Square></Square>
          <Square monster></Square>
          <Square></Square>
          <Square player='warrior'></Square>
        </Ground>
      </ResponsiveMap>
    )
  }
  return (
    <div></div>
  )
}

export default WorldMap;
