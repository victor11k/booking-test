//@interfaces
import { BookingInfoModalState } from '@interfaces';
import { UnknownAction } from '@reduxjs/toolkit';

//@utils
import { resetBookingInfoModal, updateBookingInfoModal } from '@store';

//@hooks
import { useDispatch } from 'react-redux';

/**
 * Returns method to update and reset booking modal state from store
 *
 * @returns
 */
export const useUpdateBookingModalState = () => {
  const dispatch = useDispatch();

  const updateModalState = (updatedState: Partial<BookingInfoModalState>): UnknownAction =>
    dispatch(updateBookingInfoModal(updatedState));

  const resetModalState = (): UnknownAction => dispatch(resetBookingInfoModal());

  return { updateModalState, resetModalState };
};
