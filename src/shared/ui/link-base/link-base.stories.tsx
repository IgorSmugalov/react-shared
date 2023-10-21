import type { Meta, StoryObj } from '@storybook/react'
import { LinkBase } from './link-base'

const meta = {
  component: LinkBase,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LinkBase>

export default meta
type Story = StoryObj<typeof LinkBase>

export const AsNextJsLink: Story = {
  render: () => {
    return <LinkBase href={'/'}>NextJs Link</LinkBase>
  },
}

export const AsExternalLink: Story = {
  render: () => {
    return (
      <LinkBase externalLink={true} href={'https://www.google.com/'}>
        External Link
      </LinkBase>
    )
  },
}
