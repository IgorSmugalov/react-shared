import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '..'
import { headingDefaultProps } from '../typography.hooks'

const { Heading: H } = Typography

const meta = {
  title: 'UI/Typography',
  component: H,
  parameters: {
    layout: 'fullscreen',
  },
  args: { ...headingDefaultProps, children: 'Awesome header', lvl: 1 },
} satisfies Meta<typeof H>

export default meta
type Story = StoryObj<typeof H>

export const Heading: Story = {}
