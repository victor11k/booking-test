//@components
import {
  BookingList,
  CreateBookingModal,
  EditBookingModal,
  ShowBookingModal,
} from '@components/booking';
import { Header } from '@components/layout';
import { AppShell, Container } from '@mantine/core';

/**
 * Return the Home page component
 * @returns
 */
function HomePage() {
  return (
    <Container size="lg">
      <AppShell header={{ height: 60 }}>
        <Header />
        <AppShell.Main mt="sm">
          <BookingList />
        </AppShell.Main>
      </AppShell>

      <CreateBookingModal />
      <EditBookingModal />
      <ShowBookingModal />
    </Container>
  );
}

export default HomePage;
