//@hooks
import { useSelector } from 'react-redux';

//@interfaces
import { BookingInfoModalEnum, RootState } from '@interfaces';

/**
 * Returns the booking modal state from store
 *
 * @returns
 */
export const useBookingModalState = () =>
  useSelector((state: RootState) => {
    const bookingModalState = state.modals.bookingInfoModal;

    const isCreateModalOpened =
      bookingModalState.type === BookingInfoModalEnum.CREATE && bookingModalState.opened;

    const isReadModalOpened =
      bookingModalState.type === BookingInfoModalEnum.READ && bookingModalState.opened;

    const isEditModalOpened =
      bookingModalState.type === BookingInfoModalEnum.EDIT && bookingModalState.opened;

    const { bookingInfo } = bookingModalState;

    return {
      isCreateModalOpened,
      isReadModalOpened,
      isEditModalOpened,
      bookingInfo,
    };
  });
