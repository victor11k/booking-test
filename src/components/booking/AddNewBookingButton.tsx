//@components
import { Button, ButtonProps } from '@mantine/core';
import { IconCirclePlus } from '@tabler/icons-react';

//@hooks
import { useUpdateBookingModalState } from '@hooks';

//@interfaces
import { BookingInfoModalEnum } from '@interfaces';

/**
 * Return the AddNewBookingButton component
 *
 * @returns JSX
 */
function AddNewBookingButton(buttonProps: ButtonProps) {
  const { updateModalState } = useUpdateBookingModalState();

  return (
    <Button
      onClick={() =>
        updateModalState({
          opened: true,
          type: BookingInfoModalEnum.CREATE,
        })
      }
      rightSection={<IconCirclePlus size={20} />}
      {...buttonProps}
    >
      Add new booking
    </Button>
  );
}

export default AddNewBookingButton;
