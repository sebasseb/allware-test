// StyledButton.js
import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      color: #007bff;
      border: 2px solid #007bff;
      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
        color: #0056b3;
        border-color: #0056b3;
      }
    `}
`;

const StyledButton = ({ children, onClick, outline, ...props }) => {
  return (
    <Button onClick={onClick} outline={outline} {...props}>
      {children}
    </Button>
  );
};

export default StyledButton;
