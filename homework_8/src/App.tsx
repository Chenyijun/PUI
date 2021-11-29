import React, { FC, useEffect, useState }  from "react";
import { AppWrapper, Header, Instructions, LeftWrapper, RightWrapper, CharacterChat, CharacterImage, Text, Footer } from "./components/appComponents";
import Editor from './Editor'
import Map from './Map'
import './App.css'

const App:FC = () => {
  let [justify, setJustify] = useState<string>('')
  return (
    <AppWrapper>
      <LeftWrapper>
        <Header><h1>CSS Adventure</h1></Header>
        <Instructions>Using a combination of justify-content and align-items to allow each member of the party to reach their destination.</Instructions>
        <Editor justify={justify} setJustify={setJustify} />
        <Footer>This is the footer</Footer>
      </LeftWrapper>
      <RightWrapper>
        <CharacterChat>
          <CharacterImage>Pic</CharacterImage>
          <Text>Let’s prepare for our first adventure! First we need to collect some supplies!
            I can stop by the guild to gather more information.
            The Cleric can go stock up on potions.
            The Mage can stop by the blacksmith to upgrade our weapons. 
          </Text>
        </CharacterChat>
        <Map justify={justify}/>
      </RightWrapper>
    </AppWrapper>
  );
}

export default App;
