'use client'

import { FC } from 'react'
import { Typography } from '@shared/ui'
import styles from './typography-demo.module.scss'

const { Heading, SubHeading, Body } = Typography

export const TypographyDemo: FC = () => {
  return (
    <Typography cropLineHeight align={'center'}>
      <div className={styles.container}>
        <Heading lvl={1}>Heading 1</Heading>
        <Heading lvl={2}>Heading 2</Heading>
        <Heading lvl={3}>Heading 3</Heading>
        <Heading lvl={4}>Heading 4</Heading>
        <Heading lvl={5}>Heading 5</Heading>
        <Heading lvl={6}>Heading 6</Heading>
        <SubHeading variant="primary">SubHeading 1</SubHeading>
        <SubHeading variant="secondary">SubHeading 2</SubHeading>
        <Body>Body text</Body>
      </div>
    </Typography>
  )
}
