import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './index'
import { bodyDefaultProps } from './typography.hooks'

const { Body: B } = Typography

const meta = {
  component: B,
  parameters: {
    layout: 'fullscreen',
  },
  args: { ...bodyDefaultProps, children: 'Lorem ipsum dolor si met' },
} satisfies Meta<typeof B>

export default meta
type Story = StoryObj<typeof B>

export const ParagraphText: Story = {
  args: { as: 'p' },
}

export const PhraseText: Story = {
  args: { as: 'span' },
}
