//@components
import { BookingForm } from '@components/booking';
import { CustomModal } from '@components/ui';
import { notifications } from '@mantine/notifications';

//@interfaces
import { BookingType } from '@interfaces';

//@utils
import { getFormattedDate } from '@utils';

//@hooks
import { useBookingModalState, useCreateBooking, useUpdateBookingModalState } from '@hooks';

/**
 * Return the CreateBookingModal component
 *
 * @returns JSX
 */
function CreateBookingModal() {
  const { isCreateModalOpened } = useBookingModalState();
  const { resetModalState } = useUpdateBookingModalState();

  const closeModal = () => resetModalState();

  const createBooking = useCreateBooking();

  const afterSubmitCallback = (bookingInfo: BookingType) => {
    createBooking(bookingInfo);
    closeModal();

    notifications.show({
      title: 'Booking was created!',
      message: `You reserved a booking ${getFormattedDate(bookingInfo.fromDate)}-${getFormattedDate(
        bookingInfo.toDate
      )}!`,
      withCloseButton: true,
      autoClose: 5000,
      color: 'green',
    });
  };

  return (
    <CustomModal title="Create a new booking" opened={isCreateModalOpened} onClose={closeModal}>
      <BookingForm afterSubmitCallback={afterSubmitCallback} />
    </CustomModal>
  );
}

export default CreateBookingModal;
