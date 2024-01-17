//@components
import { BookingForm } from '@components/booking';
import { CustomModal } from '@components/ui';
import { notifications } from '@mantine/notifications';

//@hooks
import { useBookingModalState, useEditBooking, useUpdateBookingModalState } from '@hooks';

//@interfaces
import { BookingType } from '@interfaces';

//@utils
import { getFormattedDate } from '@utils';

/**
 * Return the EditBookingModal component
 *
 * @returns JSX
 */
function EditBookingModal() {
  const { isEditModalOpened, bookingInfo } = useBookingModalState();
  const { resetModalState } = useUpdateBookingModalState();
  const editBooking = useEditBooking();

  const closeModal = () => resetModalState();

  const afterSubmitCallback = (newBookingInfo: BookingType) => {
    editBooking(newBookingInfo);
    closeModal();

    notifications.show({
      title: 'Booking was updated!',
      message: `You updated a booking ${getFormattedDate(
        newBookingInfo.fromDate
      )}-${getFormattedDate(newBookingInfo.toDate)}!`,
      withCloseButton: true,
      autoClose: 5000,
      color: 'orange',
    });
  };

  return (
    <CustomModal title="Edit booking" opened={isEditModalOpened} onClose={closeModal}>
      {bookingInfo && (
        <BookingForm afterSubmitCallback={afterSubmitCallback} bookingInfo={bookingInfo} />
      )}
    </CustomModal>
  );
}

export default EditBookingModal;
