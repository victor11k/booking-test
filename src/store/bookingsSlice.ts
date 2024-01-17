//@interfaces
import { BookingType, BookingsSliceInitialState } from '@interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * Returns the slice of bookings reducer
 */
export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
  } as BookingsSliceInitialState,
  reducers: {
    createBooking: (state, action: PayloadAction<BookingType>) => {
      const newBooking = action.payload;

      state.bookings.push(newBooking);
    },
    editBooking: (state, action: PayloadAction<BookingType>) => {
      const newBooking = action.payload;

      const existingBookingIndex = state.bookings.findIndex(
        (booking) => booking.id === newBooking.id
      );

      if (existingBookingIndex !== -1) {
        state.bookings[existingBookingIndex] = newBooking;
      }
    },
    deleteBooking: (state, action: PayloadAction<string>) => {
      const deletedBookingId = action.payload;

      state.bookings = state.bookings.filter((booking) => booking.id !== deletedBookingId);
    },
  },
});

export const { editBooking, deleteBooking, createBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
