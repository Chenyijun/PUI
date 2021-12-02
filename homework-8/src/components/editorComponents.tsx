import styled from 'styled-components'

export const EditorWrapper = styled.div`
  background: black;
  color: white;
  padding: 1rem;
`

export const EditorLine = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  font-family: 'Source Code Pro', monospace;
  display: grid;
  grid-template-columns: min-content max-content auto;
  align-items: center;
  grid-gap: 1rem;
  p {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
`

export const LineNum = styled.p`
`

interface editorProps {
  indent?: boolean
}

export const EditorText = styled.div<editorProps>`
  margin-left: ${props => props.indent && '1rem'};
`