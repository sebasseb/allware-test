// StyledImage.js
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    border-radius: 8px;

`;

const StyledImage = ({ src, alt, ...props }) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default StyledImage;
