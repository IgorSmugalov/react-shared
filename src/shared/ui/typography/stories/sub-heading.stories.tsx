import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '..'
import { subHeaderDefaultProps } from '../typography.hooks'

const { SubHeading: SH } = Typography

const meta = {
  title: 'UI/Typography',
  component: SH,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...subHeaderDefaultProps,
    children: 'Awesome SubHeader',
    variant: 'primary',
  },
} satisfies Meta<typeof SH>

export default meta
type Story = StoryObj<typeof SH>

export const SubHeading: Story = {}
