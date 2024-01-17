//@components
import { AddNewBookingButton, BookingItem, EmptyBookingList } from '@components/booking';
import { Flex, Stack, Title } from '@mantine/core';

//@hooks
import { useBookingsList } from '@hooks';

/**
 * Return the BookingList component
 *
 * @returns JSX
 */
function BookingList() {
  const bookingsList = useBookingsList();

  return (
    <Stack>
      {bookingsList.length ? (
        <>
          <Flex justify="space-between">
            <Title order={4} c="blue">
              Your bookings:
            </Title>
            <AddNewBookingButton w={200} />
          </Flex>
          {bookingsList.map((booking) => (
            <BookingItem key={booking.id} bookingInfo={booking} />
          ))}
        </>
      ) : (
        <EmptyBookingList
          wrapperProps={{
            mt: '100px',
          }}
        />
      )}
    </Stack>
  );
}

export default BookingList;
