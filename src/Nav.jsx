import React, {useEffect} from "react";
import {
  useLocation
} from "react-router-dom";
import { NavBar, BagCount, NavLink, StyledLink } from './Components'

const Nav = ({bagCount}) => {
  const location = useLocation()
  const currentPath=location.pathname
  
  return (
    <NavBar>
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