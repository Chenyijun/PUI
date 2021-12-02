import React, {FC, ChangeEvent} from "react";
import {EditorWrapper, EditorLine, LineNum, EditorText} from './components/editorComponents'

type Props = {
  setCssInput: (val: string) => void;
  setCssInput2?: (val: string) => void;
  editor: Array<EditorProps>;
}

type EditorProps = {
  type: string,
  content: string,
  indent?: boolean
}

type InputEvent = ChangeEvent<HTMLInputElement>;

const Editor:FC<Props> = ({editor, setCssInput, setCssInput2}) => {
  console.log(editor)
  return (
    <EditorWrapper>
      {editor.map((line, i) => {
        return(
        <EditorLine key={i}>
          <LineNum>{i}</LineNum>
          <EditorText indent={line.indent}>{line.content}</EditorText>
          {line.type === 'input' && <input onChange={(e:InputEvent) => setCssInput(e.target.value)}/>}
          {line.type === 'input2' && <input onChange={(e:InputEvent) => setCssInput2 && setCssInput2(e.target.value)}/>}
        </EditorLine>
        )
      })}
    </EditorWrapper>
  )
}

export default Editor;
