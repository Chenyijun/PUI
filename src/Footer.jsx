import React from "react";
import './App.css';
import {
  Link
} from "react-router-dom";

const Nav = () => {
  return (
    <footer>
      <p><b>Bun Bun Bake Shop</b></p>
      <Link to="./visit">Visit</Link>
      <Link to="./contact">Contact Us</Link>
	  </footer>
  )
}

export default Nav