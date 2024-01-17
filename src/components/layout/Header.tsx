//@components
import { ColorSchemeToggle } from '@components/theme';
import { AppShell, Box, Container, Flex, Title, useMantineTheme } from '@mantine/core';
import { Icon3dCubeSphere } from '@tabler/icons-react';

/**
 * Return the Header component
 * @returns JSX
 */
function Header() {
  const theme = useMantineTheme();

  return (
    <AppShell.Header>
      <Container size="lg" h="100%">
        <Flex align="center" h="100%" mx="xs">
          <Icon3dCubeSphere size={40} color={theme.colors.blue[6]} />
          <Title
            ml="xs"
            styles={{
              root: {
                color: theme.colors.blue[6],
              },
            }}
            order={3}
          >
            Fancy Booking Application
          </Title>
          <Box ml="auto">
            <ColorSchemeToggle />
          </Box>
        </Flex>
      </Container>
    </AppShell.Header>
  );
}

export default Header;
