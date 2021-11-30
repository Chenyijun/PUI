import { FC, useState }  from "react";
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer, LevelWrapper } from "./components/appComponents";
import Editor from './Editor'
import WorldMap from './WorldMap'
import './App.css'
import { getLevelInfo } from "./levels";

const App:FC = () => {
  let [level, setLevel] = useState<number>(0)
  let [cssInput, setCssInput] = useState<string>('')
  let [cssInput2, setCssInput2] = useState<string>('')
  const levelInfo = getLevelInfo(level)

  console.log(levelInfo)
  console.log(cssInput)
  return (
    <AppWrapper>
      <LeftWrapper>
        <Header>
          <h1>CSS Adventure</h1>
          <LevelWrapper>
            <button disabled={level===0} onClick={()=>setLevel(level-1)}>PREVIOUS</button>
            <p>{level}</p>
            <button disabled={level===1} onClick={()=>setLevel(level+1)}>NEXT</button>
          </LevelWrapper>
        </Header>
        <Instructions>{levelInfo.instructions}</Instructions>
        <Editor editor={levelInfo.editor} setCssInput={setCssInput} setCssInput2={setCssInput2} />
        <Footer>This is the footer</Footer>
      </LeftWrapper>
      <RightWrapper>
        <CharacterChat>
          <CharacterImage>Pic</CharacterImage>
          <Text>{levelInfo.characterText}</Text>
        </CharacterChat>
        <WorldMap level={levelInfo.level} cssInput={cssInput} cssInput2={cssInput2}/>
      </RightWrapper>
    </AppWrapper>
  );
}

export default App;
