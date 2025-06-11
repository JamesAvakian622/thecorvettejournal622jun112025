import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Nav = styled.nav`
  background: #333;
  padding: 1rem;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 3.5rem !important;
  gap: 20px;
  cursor: pointer;
  margin-left: -30%
  @media (min-width: 768px) {
    display: none;

  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;

  
  display: ${(props) => (props.open ? "block" : "none")};
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const NavLink = styled.li`
  padding: 10px;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: #555;
  }

  @media (min-width: 768px) {
    display: none;
    font-size: 1.75rem;
    color: white;
  }

    

`;

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
      <NavLinks open={menuOpen}>
        <NavLink>Stingray</NavLink>
        <NavLink>Z06</NavLink>
        <NavLink>E-Ray</NavLink>
        <NavLink>Index</NavLink>
        <NavLink>2026</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default MobileNav;
