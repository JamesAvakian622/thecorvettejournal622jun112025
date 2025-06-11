import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  //   display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  // justify-content: center;
  // background-color: black;
  // margin-left: -7%;
  // max-width: 110%;
  // margin-bottom: -3%;
  textalign: center;
`;

const NavbarItem = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  align-item: center; /* Align icon and text vertically */

  &:hover {
    color: rgb(19, 80, 234);
    text-decoration: underline;
  }
`;

const NavbarIcon = styled.img`
  width: 200px; /* Adjust size as needed */
  height: 75px; /* Ensure proportional sizing */
  margin-right: 8px; /* Add spacing between icon and text */
  width: 30%;
  height: auto;
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  flex-direction: row;
  align-items: center;
`;

export default function NavbarExterior() {
  return (
    <>
      <div>
        <NavbarContainer>
          <NavbarItem to="#1">
            <NavbarIcon src="/1.png" alt="More Icon" />
            Artic White
          </NavbarItem>
          <NavbarItem to="/Drive">
            <NavbarIcon src="/2.png" alt="Drive Icon" />
            Black
          </NavbarItem>
          <NavbarItem to="/Quiz">
            <NavbarIcon src="/3.png" alt="Quiz Icon" />
            Torch Red
          </NavbarItem>
          <NavbarItem to="/List">
            <NavbarIcon src="/4.png" alt="List Icon" />
            Riptide Blue
          </NavbarItem>
          <NavbarItem to="/Calendar">
            <NavbarIcon src="/5.png" alt="Events Icon" />
            Hysteria Purple
          </NavbarItem>
        </NavbarContainer>
      </div>
      <br />
      <br />
      <div>
        <NavbarContainer>
          <NavbarItem to="/Weather">
            <NavbarIcon src="/6.png" alt="Weather Icon" />
            Rapid Blue
          </NavbarItem>
          <NavbarItem to="/Concept">
            <NavbarIcon src="/7.png" alt="Concept Icon" />
            Competition Yellow
          </NavbarItem>
          <NavbarItem to="/Future">
            <NavbarIcon src="/8.png" alt="Software Icon" />
            Sebring Orange
          </NavbarItem>
          <NavbarItem to="/Future">
            <NavbarIcon src="/9.png" alt="Software Icon" />
            Red Mist
          </NavbarItem>
          <NavbarItem to="/Future">
            <NavbarIcon src="/10.png" alt="Software Icon" />
            SeaWolf Gray
          </NavbarItem>
        </NavbarContainer>
      </div>
      <br />
    </>
  );
}
