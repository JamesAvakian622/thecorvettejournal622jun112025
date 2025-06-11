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
  margin-bottom: -3%;
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

export default function NavbarExtC() {
  return (
    <>
  
      <div>
        <NavbarContainer>
          <NavbarItem to="/More2">
            <NavbarIcon src="/StipesBlue.png" alt="More Icon" />
            
          </NavbarItem>
          <NavbarItem to="/Drive">
            <NavbarIcon src="/StipesCarbon.png" alt="Drive Icon" />
        
          </NavbarItem>
          <NavbarItem to="/Quiz">
            <NavbarIcon src="/StipesOrange.png" alt="Quiz Icon" />
   
          </NavbarItem>
          <NavbarItem to="/List">
            <NavbarIcon src="/StipesRed.png" alt="List Icon" />
         
          </NavbarItem>
          <NavbarItem to="/Calendar">
            <NavbarIcon src="/StipesSilver.png" alt="Events Icon" />
          
          </NavbarItem>
     
          <NavbarItem to="/Weather">
            <NavbarIcon src="/StipesYellow.png" alt="Weather Icon" />
        
          </NavbarItem>

        </NavbarContainer>
      </div>
      <br />
    </>
  );
}
