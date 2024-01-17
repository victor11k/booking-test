//@components
import { AddNewBookingButton } from '@components/booking';
import { Flex, FlexProps, Title, useMantineTheme } from '@mantine/core';
import { IconCalendarSad } from '@tabler/icons-react';

type EmptyBookingListProps = {
  wrapperProps?: FlexProps;
};

/**
 * Return the EmptyBookingList component
 *
 * @returns JSX
 */
function EmptyBookingList({ wrapperProps }: EmptyBookingListProps) {
  const theme = useMantineTheme();

  return (
    <Flex direction="column" justify="center" align="center" {...wrapperProps}>
      <IconCalendarSad color={theme.colors.blue[6]} size={50} />
      <Title
        mt="lg"
        styles={{
          root: {
            color: theme.colors.blue[6],
          },
        }}
        order={4}
      >
        Booking list is empty!
      </Title>
      <AddNewBookingButton mt="lg" />
    </Flex>
  );
}

export default EmptyBookingList;
