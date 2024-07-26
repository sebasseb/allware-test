import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "../../components/button/StyledButton";
import { useLocation } from "react-router-dom";

import { media } from "../../helpers/media";

const Container = styled.div`
  width: 100wv;
  height:70px;
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
  padding: 0 5rem;
`;

const ListItem = styled.li`
  max-height: 50px;

`;

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Container>
      <Nav>
        <LinkList>
          <ListItem>
            <Link style={{ textDecoration: "none", color: "#002eff" }} to="/">
              <StyledButton outline={pathname === "/" ? false : true}>
                Formulario
              </StyledButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: "none", color: "#002eff" }}
              to="/list"
            >
              <StyledButton outline={pathname === "/list" ? false : true}>
                Lista Formulario
              </StyledButton>
            </Link>
          </ListItem>
        </LinkList>
      </Nav>
    </Container>
  );
}

export default Navbar;
