import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '..'
import { bodyDefaultProps } from '../typography.hooks'

const { Body: B } = Typography

const meta = {
  title: 'UI/Typography',
  component: B,
  parameters: {
    layout: 'fullscreen',
  },
  args: { ...bodyDefaultProps, children: 'Awesome body text' },
} satisfies Meta<typeof B>

export default meta
type Story = StoryObj<typeof B>

export const Body: Story = {}
