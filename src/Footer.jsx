// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  FooterCenter,
  Row,
  Column,
  FooterLink,
  Heading,
  Bottom,
} from "./FooterStyles";
import CarouselZR1 from "./ZR1/CarouselZR1";
import { Link } from "react-router-dom";
import "./styles/Page.css";

export default function Footer() {
  return (
  <>
  
  <Box>
  <br/>
  <br />


  <CarouselZR1 />
      <h1
        style={{
          color: "Blue",
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "15px",
        }}
      >
        The Corvette Journal
      </h1>

     

      {/* <FooterContainer> */}
        <div className="footOver">
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
              <FooterLink href="./Stingray/PageStingPhotoA">
                Stingray
              </FooterLink>
              <FooterLink href="./Eray/PageErayPhotoA     ">E-Ray</FooterLink>
              <FooterLink href=" ./Z06/PageZ06PhotoA    ">Z06</FooterLink>
              <FooterLink href="./ZR1/PageZR1PhotoA     ">ZR1</FooterLink>
              <FooterLink href=" ./C8R/PageC8RPhotoA    ">C8.R</FooterLink>
            </Column>
           
           <Column>
              <Heading>Interiors</Heading>
              <FooterLink href="./Stingray/PageStingPhotoA">
                Stingray
              </FooterLink>
              <FooterLink href="./Eray/PageErayPhotoA     ">E-Ray</FooterLink>
              <FooterLink href=" ./Z06/PageZ06PhotoA    ">Z06</FooterLink>
              <FooterLink href="./ZR1/PageZR1PhotoA     ">ZR1</FooterLink>
              <FooterLink href=" ./C8R/PageC8RPhotoA    ">C8.R</FooterLink>
            </Column>

            <Column>
              <Heading>Engines</Heading>
              <FooterLink href="./LT2">The Stingray, LT2</FooterLink>
              <FooterLink href=" ./Eray/PageErayLT2 "> The E-Ray, LT2 & Motor
              </FooterLink>
              <FooterLink href="  ./LT6    ">The Z06 Engine, LT6</FooterLink>
              <FooterLink href="  ./LT7   ">The ZR1 Engine, LT7</FooterLink>
            </Column>

            <Column>
              <Heading>Videos</Heading>
              <FooterLink href="./Stingray/PageStingSound">
                Stingray LT2
              </FooterLink>
              <FooterLink href="./Eray/PageEraySound">
                The Eray Sound
              </FooterLink>
              <FooterLink href="./Z06/PageZ06Sound">The Z06 LT6</FooterLink>
              <FooterLink href="./ZR1/PageZR1Sound">The ZR1 LT7</FooterLink>
            </Column>
            <Column>
              <Heading>Sound</Heading>
              <FooterLink href="./Stingray/PageStingSound">
                Stingray LT2
              </FooterLink>
              <FooterLink href="./Eray/PageEraySound">
                Eray LT2 n Motor
              </FooterLink>
              <FooterLink href="./Z06/PageZ06Sound">The Z06 LT6</FooterLink>
              <FooterLink href="./ZR1/PageZR1Sound">The ZR1 LT7</FooterLink>
            </Column>
              
               <Column>
              <Heading>Racing</Heading>
              <FooterLink href="./Stingray/PageStingPhotoA">
                Stingray
              </FooterLink>
              <FooterLink href="./Eray/PageErayPhotoA     ">E-Ray</FooterLink>
              <FooterLink href=" ./Z06/PageZ06PhotoA    ">Z06</FooterLink>
              <FooterLink href="./ZR1/PageZR1PhotoA     ">ZR1</FooterLink>
              <FooterLink href=" ./C8R/PageC8RPhotoA    ">C8.R</FooterLink>
            </Column>
               <Column>
              <Heading>Customs</Heading>
              <FooterLink href="./Stingray/PageStingPhotoA">
                Stingray
              </FooterLink>
              <FooterLink href="./Eray/PageErayPhotoA     ">E-Ray</FooterLink>
              <FooterLink href=" ./Z06/PageZ06PhotoA    ">Z06</FooterLink>
              <FooterLink href="./ZR1/PageZR1PhotoA     ">ZR1</FooterLink>
              <FooterLink href=" ./C8R/PageC8RPhotoA    ">C8.R</FooterLink>
            </Column>
               <Column>
              <Heading>History</Heading>
              <FooterLink href="./H1">The Corvette Stingray</FooterLink>
              <FooterLink href="./H2">The Corvette Z06</FooterLink>
              <FooterLink href="./H3">The Corvette E-Ray</FooterLink>
              <FooterLink href="./H4">The Corvette ZR1</FooterLink>
     
            </Column>
               <Column>
              <Heading>Legacy</Heading>
                <FooterLink href="./C1C8">The Corvette Legacy</FooterLink>
              <FooterLink href="./C1">The C1 Corvette</FooterLink>
              <FooterLink href=" ./C2">The C2 Corvette</FooterLink>
              <FooterLink href="./C3">The C3 Corvette</FooterLink>
              <FooterLink href="./C4">The C4 Corvette</FooterLink>
              <FooterLink href="./C5">The C5 Corvette</FooterLink>
              <FooterLink href="./C6">The C6 Corvette</FooterLink>
              <FooterLink href="./C7">The C7 Corvette</FooterLink>
              <FooterLink href="./Stingray">The C8 Corvette</FooterLink>
            </Column>
            <Column>
              <Heading>Legal</Heading>
              <FooterLink href="/About">
                About Us
              </FooterLink>
<FooterLink href="/Future">
Our Future Applications
</FooterLink>

              <FooterLink href="https://javakian1.wixsite.com/opticalautomation-c/product-policy">
                Terms Of Useage
              </FooterLink>
              <FooterLink href="   https://javakian1.wixsite.com/opticalautomation-c/terms-of-use-privacy-policies       ">
                Privacy Policy
              </FooterLink>
          
              <FooterLink href="https://javakian1.wixsite.com/opticalautomation-c/copyright-trademark-and-patents">
                Content Policy
              </FooterLink>
          
            </Column>
            <Column>
              <Heading>Networks</Heading>
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
        </div>
    
            
        <h3
          style={{
            color: "white",
            fontSize: "0.75rem",
            textAlign: "center",
            marginLeft: "-0px",
          }}
        >
          <br/>
          © 2025, The Corvette Journal, All rights reserved.
        </h3>

      {/* </FooterContainer> */}

    </Box>
    </>
  );
}
