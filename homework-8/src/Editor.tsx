import React, {FC, ChangeEvent} from "react";
import {EditorWrapper, EditorLine, LineNum, EditorText} from './components/editorComponents'

type Props = {
  justify: string;
  setJustify: (val: string) => void;
  editor: Array<EditorProps>;
}

type EditorProps = {
  type: string,
  content: string
}

type InputEvent = ChangeEvent<HTMLInputElement>;

const Editor:FC<Props> = ({editor, justify, setJustify}) => {
  console.log(editor)
  return (
    <EditorWrapper>
      {editor.map((line, i) => {
        return(
        <EditorLine>
          <LineNum>{i}</LineNum>
          <EditorText>{line.content}</EditorText>
        </EditorLine>
        )
      })}
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
