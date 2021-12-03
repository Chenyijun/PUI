import React, { FC, useState, useEffect }  from "react";
import ReactTooltip from 'react-tooltip';
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer, LevelWrapper, StyledButton } from "./components/appComponents";
import Editor from './Editor'
import WorldMap from './WorldMap'
import './App.css'
import { getLevelInfo } from "./levels";

const App:FC = () => {
  let [level, setLevel] = useState<number>(1)
  let [cssInput, setCssInput] = useState<string>('')
  let [cssInput2, setCssInput2] = useState<string>('')
  let [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  let [showLevels, setShowLevels] = useState<boolean>(false)
  const levelInfo = getLevelInfo(level-1)
  let completedLevels:Array<number> = JSON.parse(localStorage.getItem('levels') || "[]")

  const isComplete = () => {
    completedLevels.includes(levelInfo.level)
  }

  const setComplete = () => {
    setCorrectAnswer(true)
    completedLevels.push(level)
    localStorage.setItem('levels', JSON.stringify(completedLevels))
  }

  useEffect(() => {
    if(levelInfo.answer[0] === cssInput.toString()){
      if (levelInfo.answer[1] && levelInfo.answer[1] === cssInput2.toString()){
        setComplete()
      }
      if (levelInfo.answer.length === 1) {
        setComplete()
      }
    }
  }, [cssInput, cssInput2]) /* eslint react-hooks/exhaustive-deps: "off" */

  useEffect(() => {
    setCssInput('')
    setCssInput2('')
    setCorrectAnswer(false)
  }, [level]) /* eslint react-hooks/exhaustive-deps: "off" */

  console.log('HI completedlevel', completedLevels)

  return (
    <AppWrapper>
      <LeftWrapper>
        <Header>
          <h1 data-tip='Welcome!'>CSS Adventure</h1>
          <ReactTooltip />
          <LevelWrapper>
            <StyledButton disabled={level===1} onClick={()=>setLevel(level-1)}>◄</StyledButton>
            <p>{levelInfo.level}</p>
            <StyledButton disabled={level===2} onClick={()=>setLevel(level+1)}>►</StyledButton>
          </LevelWrapper>
        </Header>
        <Instructions>{levelInfo.instructions}</Instructions>
        <Editor editor={levelInfo.editor} setCssInput={setCssInput} setCssInput2={setCssInput2} />
        <Footer>
          <StyledButton>Help</StyledButton>
          <StyledButton disabled={!correctAnswer || level===2} onClick={()=>setLevel(level+1)}>Next</StyledButton>
        </Footer>
      </LeftWrapper>
      <RightWrapper>
        <CharacterChat>
          <CharacterImage src="characterIcon.png" alt='Warrior'></CharacterImage>
          <Text small={levelInfo.characterText.length > 150}>{levelInfo.characterText}</Text>
        </CharacterChat>
        <WorldMap level={levelInfo.level} cssInput={cssInput} cssInput2={cssInput2} correct={correctAnswer}/>
      </RightWrapper>
    </AppWrapper>
  );
}

export default App;
