
import { configureStore } from '@reduxjs/toolkit';
import VehicleReducer from './vehicleSlice';

export const store = configureStore({
  reducer: {
    vehicle: VehicleReducer,
  },
});

export default store;
