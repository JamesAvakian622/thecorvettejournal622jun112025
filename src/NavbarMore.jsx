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
export default function NavbarMore() {
  return (
    <>
      <div>
        <NavbarContainer>
          <NavbarItem to="/More1">Vette See More1</NavbarItem>
          <NavbarItem to="/Drive">Roads</NavbarItem>
          <NavbarItem to="/Quiz">Quiz</NavbarItem>
          <NavbarItem to="/List">List</NavbarItem>
          <NavbarItem to="/Calendar">Events</NavbarItem>
          <NavbarItem to="/Weather">Weather</NavbarItem>
          <NavbarItem to="/Concept">C9 Concept</NavbarItem>
          <NavbarItem to="/Future">Future Software</NavbarItem>
        </NavbarContainer>
      </div>
      <br />
      <div>
        <NavbarContainer>
          <NavbarItem to="/More2">Links</NavbarItem>
          <NavbarItem to="/Bio">People</NavbarItem>
          <NavbarItem to="/Security">Security</NavbarItem>
          <NavbarItem to="/Customize">Customize</NavbarItem>
          <NavbarItem to="/RonFellows">School</NavbarItem>
          <NavbarItem to="/Tracks">Tracks</NavbarItem>
          <NavbarItem to="/C1C8">Legacy</NavbarItem>
        </NavbarContainer>
      </div>
      <br />
    </>
  );
}
