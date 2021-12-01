import React, { FC, useState, useEffect }  from "react";
import ReactTooltip from 'react-tooltip';
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer, LevelWrapper, StyledButton } from "./components/appComponents";
import Editor from './Editor'
import WorldMap from './WorldMap'
import './App.css'
import { getLevelInfo } from "./levels";

const App:FC = () => {
  let [level, setLevel] = useState<number>(0)
  let [cssInput, setCssInput] = useState<string>('')
  let [cssInput2, setCssInput2] = useState<string>('')
  let [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  const levelInfo = getLevelInfo(level)


  useEffect(() => {
    if(levelInfo.answer[0] === cssInput){
      if (levelInfo.answer[1] && levelInfo.answer[1] === cssInput2){
        setCorrectAnswer(true)
      }
    }
  }, [cssInput, cssInput2]) /* eslint react-hooks/exhaustive-deps: "off" */

  return (
    <AppWrapper>
      <LeftWrapper>
        <Header>
          <h1 data-tip='Welcome!'>CSS Adventure</h1>
          <ReactTooltip />
          <LevelWrapper>
            <StyledButton disabled={level===0} onClick={()=>setLevel(level-1)}>◄</StyledButton>
            <p>{levelInfo.level}</p>
            <StyledButton disabled={level===1} onClick={()=>setLevel(level+1)}>►</StyledButton>
          </LevelWrapper>
        </Header>
        <Instructions>{levelInfo.instructions}</Instructions>
        <Editor editor={levelInfo.editor} setCssInput={setCssInput} setCssInput2={setCssInput2} />
        <Footer>
          <StyledButton>Help</StyledButton>
          <StyledButton disabled={!correctAnswer} onClick={()=>setLevel(level+1)}>Next</StyledButton>
        </Footer>
      </LeftWrapper>
      <RightWrapper>
        <CharacterChat>
          <CharacterImage src="characterIcon.png" alt='Warrior'></CharacterImage>
          <Text>{levelInfo.characterText}</Text>
        </CharacterChat>
        <WorldMap level={levelInfo.level} cssInput={cssInput} cssInput2={cssInput2}/>
      </RightWrapper>
    </AppWrapper>
  );
}

export default App;
