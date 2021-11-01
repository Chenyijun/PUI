import React from "react";
import { Footer } from './Components'
import './App.css';
import {
  Link
} from "react-router-dom";

const Nav = () => {
  return (
    <Footer>
      <p><b>Bun Bun Bake Shop</b></p>
      <Link to="/visit">Visit</Link>
      <Link to="/contact">Contact Us</Link>
	  </Footer>
  )
}

export default Nav