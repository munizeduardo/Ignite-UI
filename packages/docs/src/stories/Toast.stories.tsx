import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@munizeduardo-ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,

  args: {
    title: 'Toast 🍞',
    description: 'This is a toast example',
    buttonText: 'Show toast 🍞',
  },
  argTypes: {},
  decorators: [],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
