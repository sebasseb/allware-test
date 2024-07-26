import React from "react";
import styled from "styled-components";
import StyledTitle from "../../components/title/Title";
import Table from "../../components/table/Table";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 15%;

  gap: 2rem;
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TableDescrirption = styled.section`

`;

const columns = [
  {
    value: "Nombre",
    key: "name",
  },
  {
    value: "RUT Vendedor",
    key: "rut",
  },
  {
    value: "Patente Vehículo",
    key: "plate",
  },
  {
    value: "Marca Vehículo",
    key: "brand",
  },
  {
    value: "Modelo Vehículo",
    key: "model",
  },
  {
    value: "Color Vehículo",
    key: "color",
  },
];

function Lista() {
  return (
    <Container>
      <StyledTitle variant="primary">Lista formulario</StyledTitle>
      <TableContainer>
        <TableDescrirption>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse,
            accusamus quaerat aliquid quos dolore soluta necessitatibus labore
            ut libero ab impedit unde eaque dignissimos vero eligendi atque
            aliquam voluptate.
          </p>
        </TableDescrirption>

        <Table columns={columns} />
      </TableContainer>
    </Container>
  );
}

export default Lista;
