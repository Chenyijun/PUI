import React, {useEffect} from "react";
import {
  Link
} from "react-router-dom";
import { NavBar } from './Components'

const Nav = ({bagCount}) => {
  return (
    <NavBar>
      <Link to="/">Home</Link>
      <Link to="/products">Buns</Link>
      <Link to="/bag">{bagCount}</Link>
    </NavBar>
  )
}

export default Nav