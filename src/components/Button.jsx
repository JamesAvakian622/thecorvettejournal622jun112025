// Button.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Button.css";

// const Button = ({ text, to }) => {
//   return (
//     <Link to={to} className="custom-button">
//        <button>{text}</button>
//     </Link>
//   );
// };

const CustomButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 4px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(12, 25, 123);
    color: white;
  }

  &:active {
    background-color: #00408a;
  }

  &:focus {
    outline: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

const Button = ({ text, to }) => {
  return (
    <CustomButton to={to}>
      <button>{text}</button>
    </CustomButton>
  );
};

export default Button;
