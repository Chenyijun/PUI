import React, { useState } from "react";
import {Background, ModalContent} from './Components'
import './App.css'

const Modal = (props) => {
  if (props.isOpen === false){ return null}
  return (
    <div>
        <ModalContent>
          {props.children}
        </ModalContent>
        <Background onClick={props.toggleModal}/>
    </div>
  )
}

export default Modal