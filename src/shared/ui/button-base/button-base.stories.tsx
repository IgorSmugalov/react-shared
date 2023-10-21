import type { Meta, StoryObj } from '@storybook/react'
import { ButtonBase } from './button-base'

const meta = {
  component: ButtonBase,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ButtonBase>

export default meta
type Story = StoryObj<typeof ButtonBase>

export const AsOnClickButton: Story = {
  render: () => {
    return <ButtonBase onClick={() => undefined}>Button</ButtonBase>
  },
}

export const AsSubmitButton: Story = {
  render: () => {
    return <ButtonBase type={'submit'}>Submit</ButtonBase>
  },
}

export const AsLinkButton: Story = {
  render: () => {
    return <ButtonBase href={'/'}>Button</ButtonBase>
  },
}
