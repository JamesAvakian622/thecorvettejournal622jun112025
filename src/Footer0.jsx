// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import CarouselZR1 from "./ZR1/CarouselZR1";

const Footer = () => {
  return (
    <Box>
      <hr />
      <div className="footer-logo">
    
      </div>
      <h1
        style={{
          color: "Blue",
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "20px",
          marginLeft: "-75px",
        }}
      >
        The Corvette Journal
      </h1>
    <CarouselZR1 />


      <FooterContainer>
        <Row>
          <Column>
            <Heading>Corvette</Heading>
            <FooterLink href="/Stingray">Stingray</FooterLink>
            <FooterLink href="/Eray">E-Ray</FooterLink>
            <FooterLink href="/Z06">Z06</FooterLink>
            <FooterLink href="/ZR1">ZR1</FooterLink>
            <FooterLink href="/C8R">C8.R</FooterLink>
          </Column>
          <Column>
            <Heading>Photos</Heading>
            <FooterLink href="./Stingray/PageStingPhotoA">Stingray</FooterLink>
            <FooterLink href="./Eray/PageErayPhotoA     ">E-Ray</FooterLink>
            <FooterLink href=" ./Z06/PageZ06PhotoA    ">Z06</FooterLink>
            <FooterLink href="./ZR1/PageZR1PhotoA     ">ZR1</FooterLink>
            <FooterLink href=" ./C8R/PageC8RPhotoA    ">C8.R</FooterLink>
          </Column>
          <Column>
            <Heading>Engines</Heading>
            <FooterLink href="./Stingray/PageStingLT2">The LT2</FooterLink>
            <FooterLink href=" ./Eray/PageErayLT2    ">The E-Ray LT2</FooterLink>
            <FooterLink href="  ./Z06/PageZ06LT6    ">The LT6</FooterLink>
            <FooterLink href="  ./ZR1/PageZR1LT7   ">The LT7</FooterLink>
          </Column>
          <Column>
            <Heading>Sound</Heading>
            <FooterLink href="./Stingray/PageStingSound">Stingray LT2</FooterLink>
            <FooterLink href="./Eray/PageEraySound">The Eray Sound</FooterLink>
            <FooterLink href="./Z06/PageZ06Sound">The Z06 LT6</FooterLink>
            <FooterLink href="./ZR1/PageZR1Sound">The ZR1 LT7</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.tiktok.com/@thecorvettejournal">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Tik Tok
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/@thecorvettejournal">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <h3
          style={{
            color: "white",
            fontSize: "0.75rem",
            textAlign: "center",
            marginTop: "10px",
            marginLeft: "-700px",
          }}
        > © 2025, The Corvette Journal, Optical Automation, LLC, All rights     reserved.
        </h3>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
