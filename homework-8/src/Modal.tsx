import React, {FC} from "react";
import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 250px;
  min-height: 100px;
  padding: 1rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: white;
`

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

type ModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
}
const Modal:FC<ModalProps> = ({isOpen, children, toggleModal}) => {
  if (!isOpen){ return null}
  return (
    <Wrapper>
        <ModalContent>
          {children}
        </ModalContent>
        <Background onClick={()=>toggleModal()}/>
    </Wrapper>
  )
}

export default Modal