import React, {useState} from 'react';
import styled from 'styled-components';
import modalData from './modalData'; // Assuming modalData is imported from a file
// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
 @media (min-width: 768px) {
    width: 70%; /* Adjust width for tablets and larger screens */
  }

  @media (min-width: 1024px) {
    width: 60%; /* Adjust width for desktops */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ImageLink = styled.a`
  display: block;
  text-decoration: none;
  text-underline-offset: 0.2em;
  text-decoration-color: #007bff;
  text-decoration-thickness: 2px;
  text-decoration-style: solid;
  font-size: 16px;
  color: inherit;
  margin: 10px 0;
  text-align: center;
  &:hover {
    text-decoration: underline;
    color:rgb(208, 211, 13);
  }
`;

const ModalImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 5px;
  &:hover {
    transform: scale(4.05);
    transition: transform 0.2s;
  }
      @media (min-width: 768px) {
    max-height: 400px; /* ConStain image height for larger screens */
  }
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 22px; /* Increase title size for larger screens */
  }

  @media (min-width: 1024px) {
    font-size: 24px; /* Further increase title size for desktops */
  }
`;

function ModalA({isOpen, onClose, data}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation ()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <img
          src="/1010x.png"
          alt="Corvette C1"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '15px',
          }}
        />
        {/* {data.map((item, index) => (
          <ImageLink href={item.url} target="_blank" key={index}>
            <ModalImage src={item.imageSrc} alt={`Image ${index + 1}`}   style={{ width: "30%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}   />
            <ModalTitle>{item.title}</ModalTitle>
          </ImageLink>
        ))} */}
      </ModalContent>
    </ModalOverlay>
  );
}

export default function Modal () {
  const [isModalOpen, setModalOpen] = useState (false);

  const toggleModal = () => {
    setModalOpen (!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Manufacturer</button>
      <ModalA
        isOpen={isModalOpen}
        onClose={toggleModal}
        data={modalData.modalData}
      />
    </div>
  );
}
