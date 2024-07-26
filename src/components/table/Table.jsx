// src/components/Table.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow } from '../../redux/vehicleSlice';
import styled from "styled-components";
import DeleteIcon from '../../assets/Eliminar.png';

const CustomTable = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
`;

const TableRow = styled.tr``;

const TableData = styled.td`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: rgba(0, 0, 200, 0.2);
  }
`;

function Table({ columns }) {
  const data = useSelector((state) => state.vehicle.vehicles);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRow(id));
  };

  return (
    <CustomTable>
      <thead>
        <TableRow>
          {columns.map((column, index) => (
            <TableHeader key={index}>{column.value}</TableHeader>
          ))}
          <TableHeader>Eliminar</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column, colIndex) => {
              return <TableData key={colIndex}>{row[column.key]}</TableData>;
            })}
            <TableData>
              <Button onClick={() => handleDelete(row.id)}>
                <img src={DeleteIcon} alt="" />
              </Button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </CustomTable>
  );
}

export default Table;
