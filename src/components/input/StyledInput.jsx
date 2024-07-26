// StyledInput.js
import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -8px;
  left: 12px;
  background-color: white;
  padding: 0 10px;
  font-size: 12px;
  color: #002eff;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: 14px 12px 10px;
  font-size: 1rem;
  color: rgba(0, 20, 0, 1);
  border: 2px solid #002eff;
  border-radius: 10px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #3f51b5;
  }

  &:focus {
    border-color: #3f51b5;
    outline: none;
  }
`;

const HelperText = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 4px;
  display: block;
`;

const RequiredSymbol = styled.span`
  color: #f44336;
  margin-left: 4px;
`;

const StyledInput = ({
  label,
  value,
  onChange,
  helperText,
  required,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputWrapper>
      <CustomInput
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {(label || isFocused || value) && required && (
        <StyledLabel>
          {label} <RequiredSymbol>*</RequiredSymbol>
        </StyledLabel>
      )}
      {(label || isFocused || value) && !required && (
        <StyledLabel>{label} </StyledLabel>
      )}
      {helperText && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
};

export default StyledInput;
