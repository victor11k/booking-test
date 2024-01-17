//@components
import { Modal, Text, em, useMantineTheme } from '@mantine/core';

//@hooks
import { useMediaQuery } from '@mantine/hooks';

type CustomModalProps = {
  opened: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

/**
 * Return the CustomModal component
 *
 * @returns JSX
 */
function CustomModal({ opened, onClose, children, title }: CustomModalProps) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(theme.breakpoints.sm)})`);

  return (
    <Modal
      styles={{
        content: {
          maxWidth: theme.breakpoints.lg,
        },
      }}
      title={
        <Text
          styles={{
            root: {
              color: theme.colors.blue[6],
              fontWeight: 600,
            },
          }}
        >
          {title}
        </Text>
      }
      opened={opened}
      onClose={onClose}
      {...(isMobile
        ? {
            fullScreen: true,
          }
        : {
            size: '90%',
          })}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
