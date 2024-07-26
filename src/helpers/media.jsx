import { css } from "styled-components";

export const sizes = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1200px',
    
  };
  
  // Crear una función de helper para media queries
  export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (width >= ${sizes[label]}) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});
  