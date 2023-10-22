import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: 'Button' },
}
