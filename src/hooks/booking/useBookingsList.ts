//@hooks
import { useSelector } from 'react-redux';

//@interfaces
import { RootState } from '@interfaces';

/**
 * Returns the bookings list from store
 *
 * @returns BookingType[]
 */
export const useBookingsList = () => useSelector((state: RootState) => state.bookings.bookings);
