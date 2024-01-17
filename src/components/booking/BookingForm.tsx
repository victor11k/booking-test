//@components
import { Button, Grid, Textarea, em, useMantineTheme } from '@mantine/core';
import { DatePicker, DatesProvider, DatesRangeValue } from '@mantine/dates';
import { notifications } from '@mantine/notifications';

//@hooks
import { useBookingsList } from '@hooks';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';

//@interfaces
import { BookingType } from '@interfaces';

//@utils
import {
  getFormattedDate,
  isBookingIntervalOverlappingExistedBookingIntervals,
  isDateBooked,
} from '@utils';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

type BookingFormProps = {
  bookingInfo?: BookingType;
  afterSubmitCallback: (bookingInfo: BookingType) => void;
};

/**
 * Return the CreateBookingModal component
 *
 * @returns JSX
 */
function BookingForm({ bookingInfo, afterSubmitCallback }: BookingFormProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(theme.breakpoints.sm)})`);

  const bookedIntervals = useBookingsList()
    .filter((booking) => (bookingInfo ? booking.id !== bookingInfo.id : true))
    .map((booking) => [dayjs(booking.fromDate).toDate(), dayjs(booking.toDate).toDate()]);

  const form = useForm({
    initialValues: {
      comment: bookingInfo?.comment ?? '',
      bookingInterval: bookingInfo
        ? [new Date(bookingInfo.fromDate), new Date(bookingInfo.toDate)]
        : [null, null],
    },
    validateInputOnChange: true,
    validate: {
      bookingInterval: (value) => (value[0] && value[1] ? null : 'Choose booking interval'),
      comment: (value) =>
        value && value.length < 4
          ? 'Comment should have at least 4 letters'
          : value && value.length > 400
            ? 'Comment should have less than 400 letters'
            : null,
    },
  });

  const isSubmitButtonDisabled =
    Boolean(Object.keys(form.errors).length) ||
    !form.values.bookingInterval[0] ||
    !form.values.bookingInterval[1];

  const onDateChange = (dateValue: DatesRangeValue) => {
    if (!isBookingIntervalOverlappingExistedBookingIntervals(dateValue, bookedIntervals)) {
      form.getInputProps('bookingInterval').onChange(dateValue);
    } else {
      notifications.show({
        title: 'Invalid booking date interval',
        message: `Chosen interval is overlapping with existing booking ${getFormattedDate(
          dateValue[0]
        )}-${getFormattedDate(dateValue[1])}. Choose another interval!`,
        withCloseButton: true,
        autoClose: 5000,
        color: 'red',
      });
    }
  };

  const onSubmit = (values: typeof form.values) => {
    const fromDate = values.bookingInterval[0]?.toISOString();
    const toDate = values.bookingInterval[1]?.toISOString();

    if (fromDate && toDate) {
      const newBooking: BookingType = {
        comment: values.comment,
        fromDate,
        toDate,
        id: bookingInfo?.id ?? uuidv4(),
      };

      afterSubmitCallback(newBooking);
      form.reset();
    }
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Grid justify="center">
        <Grid.Col
          styles={{
            col: {
              justifyContent: 'center',
              display: 'flex',
            },
          }}
          span={{ base: 12, md: 'content' }}
        >
          <DatesProvider
            settings={{
              locale: 'en',
              timezone: 'UTC',
            }}
          >
            <DatePicker
              numberOfColumns={isMobile ? 1 : 2}
              minDate={new Date()}
              excludeDate={(date) => isDateBooked(date, bookedIntervals)}
              type="range"
              allowSingleDateInRange
              getDayProps={(date) => ({
                style: {
                  background: isDateBooked(date, bookedIntervals) ? theme.colors.gray[2] : '',
                },
              })}
              {...{
                ...form.getInputProps('bookingInterval'),
                onChange: onDateChange,
              }}
            />
          </DatesProvider>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 'auto' }}>
          <Textarea
            label="Left a comment"
            placeholder="Happy to see you in our awesome booking app!"
            minRows={4}
            maxRows={8}
            error={form.errors}
            {...form.getInputProps('comment')}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
          <Button type="submit" disabled={isSubmitButtonDisabled} fullWidth>
            {bookingInfo ? 'Update booking' : 'Submit booking'}
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default BookingForm;
