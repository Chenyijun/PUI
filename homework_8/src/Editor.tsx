import React, {FC, ChangeEvent} from "react";
import {EditorWrapper, EditorLine, LineNum, EditorText} from './components/editorComponents'

type Props = {
  justify: string;
  setJustify: (val: string) => void;
}
type InputEvent = ChangeEvent<HTMLInputElement>;

const Editor:FC<Props> = ({justify, setJustify}) => {
  return (
    <EditorWrapper>
      <EditorLine>
        <LineNum>1</LineNum>
        <EditorText>This is the editor {justify}</EditorText>
      </EditorLine>
      <EditorLine>
        <LineNum>2</LineNum>
        <EditorText><input onChange={(e:InputEvent) => setJustify(e.target.value)}/></EditorText>
      </EditorLine>
    </EditorWrapper>
  )
}

export default Editor;
