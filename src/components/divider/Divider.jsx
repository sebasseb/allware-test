import React from "react";
import styled from "styled-components";

const Line = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 1px;
`;

function Divider() {
  return <Line />;
}

export default Divider;
