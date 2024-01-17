//@interfaces
import { BookingType } from '@interfaces';

//@utils
import { createBooking } from '@store';

//@hooks
import { useDispatch } from 'react-redux';

/**
 * Returns create booking method
 *
 * @returns
 */
export const useCreateBooking = () => {
  const dispatch = useDispatch();

  const createNewBooking = (newBooking: BookingType) => dispatch(createBooking(newBooking));

  return createNewBooking;
};
