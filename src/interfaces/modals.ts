//@interfaces
import { BookingInfoModalEnum, BookingType } from './booking';

export type BookingInfoModalState = {
  opened: boolean;
  bookingInfo: BookingType | null;
  type: BookingInfoModalEnum | null;
};

export type ModalsSliceInitialState = {
  bookingInfoModal: BookingInfoModalState;
};
