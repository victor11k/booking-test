//@utils
import { deleteBooking } from '@store';

//@hooks
import { useDispatch } from 'react-redux';

/**
 * Returns method to delete booking by id from store
 *
 * @returns
 */
export const useDeleteBooking = () => {
  const dispatch = useDispatch();

  const deleteBookingById = (bookingId: string) => dispatch(deleteBooking(bookingId));

  return deleteBookingById;
};
