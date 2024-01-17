export type BookingType = {
  fromDate: string;
  toDate: string;
  comment: string;
  id: string;
};

export type BookingsSliceInitialState = {
  bookings: BookingType[];
};

export enum BookingInfoModalEnum {
  READ,
  CREATE,
  EDIT,
}
