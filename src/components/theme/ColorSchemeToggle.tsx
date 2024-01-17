//@components
import { Button, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

/**
 * Returns the ColorSchemeToggle component
 * @returns
 */
function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const isLightScheme = colorScheme === 'light';

  return (
    <Button
      px="0"
      variant="transparent"
      onClick={() => setColorScheme(isLightScheme ? 'dark' : 'light')}
    >
      {isLightScheme ? <IconMoon /> : <IconSun />}
    </Button>
  );
}

export default ColorSchemeToggle;
