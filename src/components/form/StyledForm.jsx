import React from 'react'
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;


function StyledForm({children}) {
  return (
  
      <Form>
        {children}
      </Form>
 
  )
}

export default StyledForm