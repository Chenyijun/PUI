import React from "react";
import {
  Link
} from "react-router-dom";
import { NavBar } from './Components'

const Nav = (bagItems) => {
  return (
    <NavBar>
      <Link to="/">Home</Link>
      <Link to="/products">Buns</Link>
      <Link to="/bag">{bagItems ? 'Bag' : 'BAG'}</Link>
    </NavBar>
  )
}

export default Nav