import React, { FC, useEffect, useState }  from "react";
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer } from "./components/appComponents";
import Editor from './Editor'
import Map from './Map'
import './App.css'
import { getLevelInfo } from "./levels";

const App:FC = () => {
  let [level, setLevel] = useState<number>(0)
  let [justify, setJustify] = useState<string>('')
  const levelInfo = getLevelInfo(level)
  console.log(levelInfo)
  return (
    <AppWrapper>
      <LeftWrapper>
        <Header>
          <h1>CSS Adventure</h1>
          <button disabled={level==0} onClick={()=>setLevel(level-1)}>PREVIOUS</button>
          <p>{level}</p>
          <button disabled={level==1} onClick={()=>setLevel(level+1)}>NEXT</button>
        </Header>
        <Instructions>{levelInfo.instructions}</Instructions>
        <Editor editor={levelInfo.editor} justify={justify} setJustify={setJustify} />
        <Footer>This is the footer</Footer>
      </LeftWrapper>
      <RightWrapper>
        <CharacterChat>
          <CharacterImage>Pic</CharacterImage>
          <Text>{levelInfo.characterText}</Text>
        </CharacterChat>
        <Map justify={justify}/>
      </RightWrapper>
    </AppWrapper>
  );
}

export default App;
