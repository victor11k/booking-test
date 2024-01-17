//@components
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { store } from '@store';
import { Provider } from 'react-redux';
import { Router } from './Router';

//@styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './styles/main.css';
import { theme } from './theme';

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Notifications />
        <Router />
      </MantineProvider>
    </Provider>
  );
}
