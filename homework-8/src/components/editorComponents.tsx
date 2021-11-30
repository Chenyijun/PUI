import styled from 'styled-components'

export const EditorWrapper = styled.div`
  background: black;
  color: white;
  padding: 1rem;
`

export const EditorLine = styled.div`
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

export const EditorText = styled.div`
`