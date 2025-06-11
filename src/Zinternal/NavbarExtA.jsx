import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  justify-content: center;
  items-align: space-between;
  background-color: black;
  margin-left: -7%;
  max-width: 210%;
  max-width: 230%;
  margin-bottom: -8%;
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
  width: 300px; /* Adjust size as needed */
  height: 75px; /* Ensure proportional sizing */
  margin-right: 8px; /* Add spacing between icon and text */
`;

export default function NavbarExtA() {
  return (
    <>
         <div>
        <NavbarContainer>
          <NavbarItem to="#A">
            <NavbarIcon src="/1.png" alt="   Artic White " />
           
          </NavbarItem>
          <NavbarItem to="#B">
            <NavbarIcon src="/2.png" alt="      Black    " />
         
          </NavbarItem>
          <NavbarItem to="#C">
            <NavbarIcon src="/3.png" alt="     Torch Red    " />
         
          </NavbarItem>
          <NavbarItem to="#D">
            <NavbarIcon src="/4.png" alt="    Riptide Blue  " />
           
          </NavbarItem>
          <NavbarItem to="#E">
            <NavbarIcon src="/5.png" alt="  Hysteria Purple    " />
           
          </NavbarItem>
        </NavbarContainer>
      </div>
      <br />
      <br />
      
    </>
  );
}
