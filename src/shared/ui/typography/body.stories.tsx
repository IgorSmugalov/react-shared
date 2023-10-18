import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './index'
import { bodyDefaultProps } from './typography.hooks'

const { Body: B } = Typography

const meta = {
  component: B,
  parameters: {
    layout: 'fullscreen',
  },
  args: { ...bodyDefaultProps, children: 'Awesome body text' },
} satisfies Meta<typeof B>

export default meta
type Story = StoryObj<typeof B>

export const BodyText: Story = {}
