import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  justify-content: center;
  background-color: black;
  margin-left: -7%;
  max-width: 110%;
  margin-bottom: -6%;
`;

const NavbarItem = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  align-items: center; /* Align icon and text vertically */

  &:hover {
    color: rgb(19, 80, 234);
    text-decoration: underline;
  }
`;

const NavbarIcon = styled.img`
  width: 200px; /* Adjust size as needed */
  height: 75px; /* Ensure proportional sizing */
  margin-right: 8px; /* Add spacing between icon and text */
`;

export default function NavbarExtB() {
  return (
    <>

      <div>
        <NavbarContainer>
          <NavbarItem to="/Weather">
            <NavbarIcon src="#F" alt= "  Rapid Blue  " />
           
          </NavbarItem>
          <NavbarItem to="/Concept">
            <NavbarIcon src="#G" alt="C   Competition Yellow   n" />
           
          </NavbarItem>

     <NavbarItem to="/Future">
            <NavbarIcon src="#H" alt="S    Red Mist     " />
          
          </NavbarItem>

          <NavbarItem to="/Future">
            <NavbarIcon src="#I" alt="S   Sebring Orange    " />
           
          </NavbarItem>
     
          <NavbarItem to="/Future">
            <NavbarIcon src="#J" alt="S    SeaWolf Gray    n" />
          
          </NavbarItem>
        </NavbarContainer>
      </div>
      <br />
    </>
  );
}
