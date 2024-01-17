//@components
import { CustomModal } from '@components/ui';
import { Button, Flex, Text } from '@mantine/core';

//@hooks
import { useBookingModalState, useUpdateBookingModalState } from '@hooks';

//@utils
import { getFormattedDate } from '@utils';

/**
 * Return the ShowBookingModal component
 *
 * @returns JSX
 */
function ShowBookingModal() {
  const { isReadModalOpened, bookingInfo } = useBookingModalState();
  const { resetModalState } = useUpdateBookingModalState();

  const closeModal = () => resetModalState();

  return (
    <CustomModal title="Booking information" opened={isReadModalOpened} onClose={closeModal}>
      {bookingInfo && (
        <Flex direction="column" c="blue">
          <Text>Booking id: {bookingInfo.id}</Text>
          <Text>Comment: {bookingInfo.comment ? bookingInfo.comment : 'not specified'}</Text>
          <Text>
            Booking dates: {getFormattedDate(bookingInfo.fromDate)}-
            {getFormattedDate(bookingInfo.toDate)}
          </Text>
          <Button ml="auto" mt="md" w={200} onClick={closeModal}>
            Close
          </Button>
        </Flex>
      )}
    </CustomModal>
  );
}

export default ShowBookingModal;
