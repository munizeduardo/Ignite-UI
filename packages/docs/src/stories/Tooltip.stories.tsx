import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@munizeduardo-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,

  args: {
    children: <Text as="span">Hover me!</Text>,
    tooltipContent: "Ignite UI's default tooltip!",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const OnButton: StoryObj<TooltipProps> = {
  args: {
    children: <Button size="sm">Hover me!</Button>,
    tooltipContent: "Ignite UI's default tooltip on a button!",
  },
}
