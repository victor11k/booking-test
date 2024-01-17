//@interfaces
import { DatesRangeValue } from '@mantine/dates';

//@utils
import dayjs from 'dayjs';

/**
 * Return formatted date with pattern DD/MM/YYYY
 *
 * @param date
 * @returns
 */
export const getFormattedDate = (date: Date | string | null): string =>
  dayjs(date ?? new Date()).format('DD/MM/YYYY');

/**
 * Check if date range is overlapping existing booking intervals
 * @param dateValue
 * @param bookedIntervals
 * @returns
 */
export const isBookingIntervalOverlappingExistedBookingIntervals = (
  dateValue: DatesRangeValue,
  bookedIntervals: Date[][]
) => {
  for (const interval of bookedIntervals) {
    const [existingStart, existingEnd] = interval;
    const [newStart, newEnd] = dateValue;

    if (!newStart || !newEnd) {
      return false;
    }

    if (newStart <= existingEnd && newEnd >= existingStart) {
      return true;
    }
  }

  return false;
};

/**
 * Check if date is booked
 * @param date
 * @param bookedIntervals
 * @returns
 */
export const isDateBooked = (date: Date, bookedIntervals: Date[][]) => {
  let isBooked = false;

  for (const [startBookingDate, endBookingDate] of bookedIntervals) {
    if (
      date >= new Date(startBookingDate.setHours(0)) &&
      date <= new Date(endBookingDate.setHours(0))
    ) {
      isBooked = true;

      break;
    }
  }

  return isBooked;
};
