import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const NavbarContainer = styled.nav`
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  justify-content: center;
  background-color: black;
  padding: 10px;
  margin-bottom: -3%;
`;

const NavbarItem = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    color: rgb(19, 80, 234);
    text-decoration: underline;
  }
`;
export default function NavbarTracks() {
  return (
    <>
<div className="center">    
  <br />


  <h1> <b>    The Corvette Journal Resources    </b>  </h1>
      <NavbarContainer>
        <NavbarItem to="/More/More2">Corvette Resources </NavbarItem>
        <NavbarItem to="/More/More2#2">F1 Tracks</NavbarItem>
        <NavbarItem to="/More/More2#3">Nascar</NavbarItem>
       
      </NavbarContainer>

      <br /><br />
  
 </div>
      <br />
      
    </>
  );
}
