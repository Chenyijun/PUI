import React, {FC, ChangeEvent} from "react";
import {EditorWrapper, EditorLine, LineNum, EditorText} from './components/editorComponents'

type Props = {
  cssInput: string;
  cssInput2: string;
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

const Editor:FC<Props> = ({editor, cssInput, cssInput2, setCssInput, setCssInput2}) => {
  return (
    <EditorWrapper>
      {editor.map((line, i) => {
        return(
        <EditorLine key={i}>
          <LineNum>{i}</LineNum>
          <EditorText indent={line.indent}>{line.content}</EditorText>
          {line.type === 'input' && <input value={cssInput} onChange={(e:InputEvent) => setCssInput(e.target.value)}/>}
          {line.type === 'input2' && <input value={cssInput2} onChange={(e:InputEvent) => setCssInput2 && setCssInput2(e.target.value)}/>}
        </EditorLine>
        )
      })}
    </EditorWrapper>
  )
}

export default Editor;