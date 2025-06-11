// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
  padding: 0% -5%;
  background-color: black;
  // position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 110;  margin-left: 2%;


 @media (max-width: 1000px) {
   font-size: -15%;
  }
 @media (max-width: 750px) {
    font-size: -35%;
  }
 @media (max-width: 350px) {
    font-size: -55%;
  }
`;

export const FooterCenter = styled.div`
 
  background-color: black;
   position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 110;
  margin-left: -12%;
  align-items: center;

 @media (max-width: 1000px) {
   font-size: -15%;
  }
 @media (max-width: 750px) {
    font-size: -35%;
  }
 @media (max-width: 350px) {
    font-size: -55%;
  }
`;


export const FooterContainer = styled.div`
    display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  flex-direction: column;
  justify-content: center;
  margin-left: 0%;
  width: 1500px;
  max-width: 1600px;
  margin: 0 auto;

   @media (max-width: 1000px) {
    font-size: 1.25rem;
  }
 @media (max-width: 750px) {
    font-size: 0.95rem;
  }
 @media (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

export const Column = styled.div`
  display: -webkit-flex; /* Safari older versions */
  display: flex; /* Standard for most modern browsers */
  flex-direction: column;
  text-align: left;
  margin-left: 25%;
 
 
  @media (max-width: 1000px) {
    font-size: 1.25rem;
  }
 @media (max-width: 750px) {
    font-size: 0.95rem;
  }
 @media (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  grid-gap: 2px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 1.35rem;
  }
 @media (max-width: 750px) {
    font-size: 1.15rem;
  }
 @media (max-width: 350px) {
    font-size: 0.85rem;
  }
`;
