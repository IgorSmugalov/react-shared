import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './index'
import { FC, ReactNode } from 'react'

const { Heading, SubHeading, Body } = Typography

const meta = {
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

export const Demo: Story = {
  parameters: { controls: { exclude: ['children', 'className'] } },
  tags: ['isHidden'],
  args: {
    children: (
      <>
        <Heading lvl={1}>Heading 1</Heading>
        <Heading lvl={2}>Heading 2</Heading>
        <Heading lvl={3}>Heading 3</Heading>
        <Heading lvl={4}>Heading 4</Heading>
        <Heading lvl={5}>Heading 5</Heading>
        <Heading lvl={6}>Heading 6</Heading>
        <SubHeading variant="primary">Subheading 1</SubHeading>
        <SubHeading variant="secondary">Subheading 2</SubHeading>
        <Body as={'p'}>Body text</Body>
      </>
    ),
    align: 'left',
    color: 'black',
    cropLineHeight: false,
    font: 'nunito',
    transform: 'none',
  },
}

export const DemoWithContext: Story = {
  args: { align: 'center', cropLineHeight: true },
  tags: ['isHidden'],
  render: (args) => (
    <Typography {...args}>
      <FlexContainer>
        <Heading lvl={1}>Awesome Header</Heading>
        <SubHeading variant="primary">Some additional info</SubHeading>
        <Body as={'p'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          sapiente iusto labore ipsam sint vitae, odit iure cum voluptate
          laudantium velit accusamus itaque. Architecto exercitationem porro
          velit illum? Voluptates, voluptatum.
        </Body>
      </FlexContainer>
    </Typography>
  ),
}

export const DemoWithContextAndPropsRedefinition: Story = {
  args: { align: 'center', cropLineHeight: true },
  tags: ['isHidden'],
  render: (args) => (
    <Typography {...args} align={'left'}>
      <FlexContainer>
        <SubHeading
          variant="secondary"
          transform="capitalize"
          align="right"
          color="error"
          font="rubik"
        >
          I&apos;m text with specific props and I&apos;m not affected by any
          context props
        </SubHeading>
        <Heading lvl={6} align="center" color="success">
          I&apos;m has only fixed align and color
        </Heading>
        <Body as={'p'}>I&apos;m text without specific props</Body>
      </FlexContainer>
    </Typography>
  ),
}

const FlexContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '4rem 0',
      }}
    >
      {children}
    </div>
  )
}
