import React from "react";
import styled from "styled-components";
const PrincipalTitle = styled.h1`
    font-size: 2rem;
    color: black;
    font-weight: 700;
`;

const SecondaryTitle = styled.h2`
    font-size: 1.5rem;
    color: black;
    font-weight: 700;
`;

function StyledTitle({ children, variant }) {
  return variant === "secondary" ? (
    <SecondaryTitle>{children}</SecondaryTitle>
  ) : (
    <PrincipalTitle>{children}</PrincipalTitle>
  );
}

export default StyledTitle;
