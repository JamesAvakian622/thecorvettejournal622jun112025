



// External  ColorSelector, vette

import styled from 'styled-components';

const ImageContainer = styled.a`
  position: relative;
  width: 830px;
  height: 300px;
  margin-left: -13%;
  background-image: url("/WhiteBackground.png");
  background-size: cover;
  background-position: center;
  border-radius: 20px; /* Adds rounded corners */
  overflow: hidden; /* Ensures content respects the rounded edges */
 transform: scale (1.1); /* Enlarges the image on hover */

  &:hover img {
    opacity: 0.7;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ImageOne = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 20%;
left: 10%;
transform: translate(-50%, -50%);
transition: opacity 0.3s ease-in-out;
z-index: 2;
`;

const ImageTwo = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 20%;
left: 30%;
transform: translate(-50%, -50%);
transition: opacity 0.3s ease-in-out;
z-index: 3;
`;

const ImageThree = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 20%;
bottom: 60%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageFour = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 20%;
left: 70%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageFive = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 20%;
left: 90%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageSix = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 70%;
left: 10%;
transform: translate(-50%, -50%);
z-index: 2;
`;

const ImageSeven = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 70%;
left: 30%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageEight = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 70%;
bottom: 60%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageNine = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 70%;
left: 70%;
transform: translate(-50%, -50%);
z-index: 3;
`;

const ImageTen = styled.img`
position: absolute;
width: 150px;
height: auto;
top: 70%;
left: 90%;
transform: translate(-50%, -50%);
z-index: 3;
`;


export default function ColorSelector() {
    return(

<>  

        <ImageContainer src="PageStingPhotoA" target="_blank">
           <ImageOne src="/1.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoB" target="_blank">
           <ImageTwo src="/2.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoC" target="_blank">
           <ImageThree src="/3.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoD" target="_blank">
           <ImageFour src="/4.png" alt="Image One" />
        </ImageContainer>

        <ImageContainer src="PageStingPhotoE" target="_blank">
           <ImageFive src="/5.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoF" target="_blank">
           <ImageSix src="/6.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoG" target="_blank">
           <ImageSeven src="/7.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoH" target="_blank">
           <ImageEight src="/8.png" alt="Image One" />
        </ImageContainer>

        <ImageContainer src="PageStingPhotoI" target="_blank">
           <ImageNine src="/9.png" alt="Image One" />
        </ImageContainer>
        <ImageContainer src="PageStingPhotoJ" target="_blank">
           <ImageTen src="/10.png" alt="Image One" />
        </ImageContainer>
    </>
     );
    }
    