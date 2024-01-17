import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './bookingsSlice';
import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    bookings: bookingsReducer,
    modals: modalsReducer,
  },
});
