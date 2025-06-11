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
export default function NavbarVideos() {
  return (
    <>
<div className="center">    
  <br />


  <h1> <b>    The Corvette Journal Resources    </b>  </h1>
      <NavbarContainer>
        <NavbarItem to="/More/P0">HorsePower Obsessed </NavbarItem>
        <NavbarItem to="/More/P1">Brink Of Speed </NavbarItem>
        <NavbarItem to="/More/P2">Paragon Performance</NavbarItem>
        <NavbarItem to="/More/P3">SavageGeese </NavbarItem>
        <NavbarItem to="/More/P4">Jessee Iwujii </NavbarItem>
        <NavbarItem to="/More/P5">Throttle House</NavbarItem>
        <NavbarItem to="/More/P6">Engineering Explained </NavbarItem>
        <NavbarItem to="/More/P7">Hagerty </NavbarItem>
      </NavbarContainer>

      <br /><br />


      <NavbarContainer>
        <NavbarItem to="/More/P20">Emelia Hartford </NavbarItem>
        <NavbarItem to="/More/P22">Emelia Driving </NavbarItem>
        <NavbarItem to="/More/P23">Lingfelter Engineers </NavbarItem>
        <NavbarItem to="/More/P8">Raities Rides</NavbarItem>
        <NavbarItem to="/More/P9">MotorTrend </NavbarItem>
        <NavbarItem to="/More/P10">Car & Driver </NavbarItem>
        <NavbarItem to="/More/P11">Corvette World </NavbarItem>
        <NavbarItem to="/RonFellows">Ron Fellows </NavbarItem>
        <NavbarItem to="/AutoShows">Auto Shows </NavbarItem>

        <NavbarItem to="/More2">More </NavbarItem>
      </NavbarContainer>

      <br />  
      <br />  

      <div className="center">
        <NavbarContainer>
          <NavbarItem to="/More/P12">Jay Leno </NavbarItem>
          <NavbarItem to="/More/P13">Top Gear </NavbarItem>
          <NavbarItem to="/More/P14">Nat'l Corvette Museum </NavbarItem>
          <NavbarItem to="/More/P15">Speed Phenom </NavbarItem>
          <NavbarItem to="/More/P16">Boost District </NavbarItem>
          <NavbarItem to="/More/P25">Cleetus Mc Farland </NavbarItem>
          <NavbarItem to="/Tadge">Tadge Juechter </NavbarItem>
          <NavbarItem to="/Welburn">Ed Welburn </NavbarItem>
          <NavbarItem to="/Stingray/TopTenDealers">Top Ten Dealers </NavbarItem>
          <NavbarItem to="/More/Add">Locations Vette Lovers </NavbarItem>
        </NavbarContainer>
      </div>
 </div>
      <br />
      <br />   <br /> 
    </>
  );
}
