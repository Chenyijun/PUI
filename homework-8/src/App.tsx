import React, { FC, useState, useEffect }  from "react";
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer, LevelWrapper, StyledButton, LevelButton, ButtonGrid, LevelModal } from "./components/appComponents";
import Editor from './Editor'
import WorldMap from './WorldMap'
import './App.css'
import { getLevelInfo, levels as gameLevels } from "./levels";
import Modal from './Modal'

interface Level {
  [index:string]: boolean
}
const App:FC = () => {
  let [level, setLevel] = useState<number>(1)
  let [cssInput, setCssInput] = useState<string>('')
  let [cssInput2, setCssInput2] = useState<string>('')
  let [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  let [showLevels, setShowLevels] = useState<boolean>(false)
  let [showHelp, setShowHelp] = useState<boolean>(false)
  const levelInfo = getLevelInfo(level-1)
  const completedLevels: Level = JSON.parse(localStorage.getItem('levels') || "{}")
  const setCompletedAnswers = () => {
    setCssInput(levelInfo.answer[0])
    if (levelInfo.answer.length > 1) {
      setCssInput2(levelInfo.answer[1])
    }
  }

  const setComplete = () => {
    setCorrectAnswer(true)
    completedLevels[levelInfo.level] = true
    localStorage.setItem('levels', JSON.stringify(completedLevels))
  }

  useEffect(() => {
    if(!(levelInfo.level in completedLevels)) {
      if(levelInfo.answer[0] === cssInput.toString()){
        if (levelInfo.answer[1] && levelInfo.answer[1] === cssInput2.toString()){
          setComplete()
        }
        if (levelInfo.answer.length === 1) {
          setComplete()
        }
      }
    }
  }, [cssInput, cssInput2]) /* eslint react-hooks/exhaustive-deps: "off" */

  useEffect(() => {
    if(levelInfo.level in completedLevels) {
      setCompletedAnswers()
      setCorrectAnswer(false)
    } else {
      setCssInput('')
      setCssInput2('')
      setCorrectAnswer(false)
    }
  }, [level]) /* eslint react-hooks/exhaustive-deps: "off" */

  const HelpText = () => {
    return (
      <>
        <p>{levelInfo.help}</p>
        <span>Need more help? Check out </span>
        <a href={levelInfo.type === 'flex' ? 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/': 'https://css-tricks.com/snippets/css/complete-guide-grid'}>
          CSS TRICKS
        </a>
      </>
    )
  }

  const resetAdventure = () => {
    localStorage.clear()
    setLevel(1)
    setCssInput('')
    setCssInput2('')
    setShowLevels(false)
  }

  return (
    <AppWrapper>
      <Modal isOpen={showHelp} toggleModal={()=>setShowHelp(!showHelp)}><HelpText/></Modal>
      <Modal isOpen={showLevels} toggleModal={()=>setShowLevels(!showLevels)}>
        <LevelModal>
          <p>Levels</p>
          <ButtonGrid>
            {gameLevels.map(level => 
            <LevelButton key={level.level} completed={level.level in completedLevels} onClick={()=>{setLevel(level.level);setShowLevels(false)}}>{level.level}</LevelButton>)}
          </ButtonGrid>
          <StyledButton onClick={()=>resetAdventure()}>Reset</StyledButton>
        </LevelModal>
      </Modal>
      <LeftWrapper>
        <Header>
          <h1>CSS Adventure</h1>
          <LevelWrapper>
            <StyledButton disabled={level===1} onClick={()=>setLevel(level-1)}>◄</StyledButton>
            <StyledButton onClick={()=>setShowLevels(true)}>Level {levelInfo.level} out of {gameLevels.length}</StyledButton>
            <StyledButton disabled={level === gameLevels.length} onClick={()=>setLevel(level+1)}>►</StyledButton>
          </LevelWrapper>
        </Header>
        <Instructions>{levelInfo.instructions}</Instructions>
        <Editor editor={levelInfo.editor} cssInput={cssInput} cssInput2={cssInput2} setCssInput={setCssInput} setCssInput2={setCssInput2} />
        <Footer>
          <StyledButton onClick={()=>setShowHelp(true)}>Help</StyledButton>
          <StyledButton disabled={!correctAnswer || level === gameLevels.length} onClick={()=>setLevel(level+1)}>Next</StyledButton>
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
