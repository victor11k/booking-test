//@components
import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/core/lib/core/factory/create-polymorphic-component';

//@interfaces
import { TablerIconsProps } from '@tabler/icons-react';

//@utils
import { cloneElement } from 'react';

type ActionIconButtonProps = {
  tooltipLabel: string;
  icon: JSX.Element;
} & PolymorphicComponentProps<'button', ActionIconProps>;

const iconProps: TablerIconsProps = {
  style: {
    width: '70%',
    height: '70%',
  },
  stroke: 1.5,
};

/**
 * Return the ActionIconButton component
 *
 * @returns JSX
 */
function ActionIconButton({ tooltipLabel, icon, ...rest }: ActionIconButtonProps) {
  return (
    <Tooltip label={tooltipLabel} color="gray">
      <ActionIcon variant="outline" aria-label={tooltipLabel} mr="xs" {...rest}>
        {cloneElement(icon, iconProps)}
      </ActionIcon>
    </Tooltip>
  );
}

export default ActionIconButton;
