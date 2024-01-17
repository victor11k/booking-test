//@interfaces
import { BookingType } from '@interfaces';

//@utils
import { editBooking } from '@store';

//@hooks
import { useDispatch } from 'react-redux';

/**
 * Returns method to edit booking from store
 *
 * @returns
 */
export const useEditBooking = () => {
  const dispatch = useDispatch();

  const editExistedBooking = (newBooking: BookingType) => dispatch(editBooking(newBooking));

  return editExistedBooking;
};
