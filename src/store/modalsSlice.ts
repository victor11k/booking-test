//@interfaces
import { BookingInfoModalState, ModalsSliceInitialState } from '@interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * Returns the slice of modals reducer
 */
export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    bookingInfoModal: {
      opened: false,
      bookingInfo: null,
      type: null,
    },
  } as ModalsSliceInitialState,
  reducers: {
    updateBookingInfoModal: (state, action: PayloadAction<Partial<BookingInfoModalState>>) => {
      state.bookingInfoModal = {
        ...state.bookingInfoModal,
        ...action.payload,
      };
    },
    resetBookingInfoModal: (state) => {
      state.bookingInfoModal = {
        opened: false,
        bookingInfo: null,
        type: null,
      };
    },
  },
});

export const { updateBookingInfoModal, resetBookingInfoModal } = modalsSlice.actions;

export default modalsSlice.reducer;
