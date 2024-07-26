import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100wv;
    height: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
`;

const LinkList = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
`;

const ListItem = styled.li``;




function Navbar() {
  return (
    <Container>
        <Nav>
            <LinkList>
                <ListItem>
                    <Link style={{textDecoration: 'none'}} to="/">Formulario</Link>
                </ListItem>
                <ListItem>
                    <Link style={{textDecoration: 'none'}} to="/list">Lista Formulario</Link>
                </ListItem>
            </LinkList>
        </Nav>
    </Container>
  )
}

export default Navbar