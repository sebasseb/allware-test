import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [
    {
      id: 1,
      name: "Juan Perez",
      rut: "12.345.678-9",
      plate: "AB1234",
      brand: "Toyota",
      model: "Corolla",
      color: "Rojo",
    },
    {
      id: 2,
      name: "Pedro Perez",
      rut: "12.345.678-9",
      plate: "AZX123",
      brand: "Toyota",
      model: "Corolla",
      color: "Rojo",
    },
    {
      id: 3,
      name: "Juan Perez",
      rut: "12.345.678-9",
      plate: "RED123",
      brand: "Toyota",
      model: "Corolla",
      color: "Rojo",
    },
  ],
};
const vehicleSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
      deleteRow: (state, action) => {
        const id = action.payload;
        state.vehicles = state.vehicles.filter(row => row.id !== id);
      },
      addRow: (state, action) => {
        state.vehicles.push(action.payload);
      },
    },
  });

export const { deleteRow, addRow } = vehicleSlice.actions;


export default vehicleSlice.reducer;
  