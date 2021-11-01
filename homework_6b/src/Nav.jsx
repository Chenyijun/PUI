import React from "react";
import {
  useLocation
} from "react-router-dom";
import { NavBar, BagCount, NavLink, StyledLink, Logo } from './Components'

const Nav = ({bagCount}) => {
  const location = useLocation()
  const currentPath=location.pathname
  
  return (
    <NavBar>
      <StyledLink to="/"><Logo>BB</Logo></StyledLink>
      <StyledLink to="/"><NavLink active={currentPath==="/"}>Home</NavLink></StyledLink>
      <StyledLink to="/products"><NavLink active={currentPath.indexOf("products") > -1}>Buns</NavLink></StyledLink>
      <StyledLink to="/bag">
        <BagCount>{bagCount}</BagCount>
        <img id="bag" src="BagIcon.svg" alt="Bag"/>
      </StyledLink>
    </NavBar>
  )
}

export default Nav