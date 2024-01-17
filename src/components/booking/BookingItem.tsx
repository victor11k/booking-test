//@components
import { ActionIconButton } from '@components/ui';
import { Flex, Paper, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconEdit, IconInfoCircle, IconTrash } from '@tabler/icons-react';

//@hooks
import { useDeleteBooking, useUpdateBookingModalState } from '@hooks';
import { useHover } from '@mantine/hooks';

//@interfaces
import { BookingInfoModalEnum, BookingType } from '@interfaces';

//@utils
import { notifications } from '@mantine/notifications';
import { getFormattedDate } from '@utils';
import dayjs from 'dayjs';

type BookingItemProps = {
  bookingInfo: BookingType;
};

/**
 * Return the BookItem component
 *
 * @returns JSX
 */
function BookingItem({ bookingInfo }: BookingItemProps) {
  const { fromDate, toDate, id } = bookingInfo;

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const { hovered, ref } = useHover();

  const deleteBooking = useDeleteBooking();
  const { updateModalState } = useUpdateBookingModalState();

  const bookingLabel = `Booking ${getFormattedDate(fromDate)}-${getFormattedDate(toDate)}`;
  const isEditBookingDisabled = dayjs(fromDate).toDate() < new Date();

  const onDeleteBookingClick = () => {
    deleteBooking(id);

    notifications.show({
      title: 'Booking was deleted!',
      message: `You updated a booking ${getFormattedDate(fromDate)}-${getFormattedDate(toDate)}!`,
      withCloseButton: true,
      autoClose: 5000,
      color: 'red',
    });
  };

  const onShowBookingClick = () =>
    updateModalState({
      opened: true,
      type: BookingInfoModalEnum.READ,
      bookingInfo,
    });

  const onEditBookingClick = () =>
    updateModalState({
      opened: true,
      type: BookingInfoModalEnum.EDIT,
      bookingInfo,
    });

  return (
    <Paper
      bg={hovered ? (colorScheme === 'light' ? theme.colors.blue[0] : theme.colors.dark[4]) : ''}
      shadow="xs"
      p="xs"
      ref={ref}
    >
      <Flex justify="space-between">
        <Text c={theme.colors.blue[6]} fw={500}>
          {bookingLabel}
        </Text>

        <Flex>
          <ActionIconButton
            onClick={onShowBookingClick}
            icon={<IconInfoCircle />}
            tooltipLabel="Show booking info"
          />
          <ActionIconButton
            icon={<IconEdit />}
            tooltipLabel={isEditBookingDisabled ? 'Booking has ended' : 'Edit booking'}
            onClick={onEditBookingClick}
            disabled={isEditBookingDisabled}
          />
          <ActionIconButton
            icon={<IconTrash />}
            tooltipLabel="Delete booking"
            color="red"
            onClick={onDeleteBookingClick}
          />
        </Flex>
      </Flex>
    </Paper>
  );
}

export default BookingItem;
