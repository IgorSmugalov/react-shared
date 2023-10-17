'use client'

import { Typography } from '@shared/ui'

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        height: '100dvh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <a
        href="https://igorsmugalov.github.io/react-shared"
        style={{ textDecoration: 'none' }}
      >
        <Typography.SubHeading variant={'primary'}>
          Go to Doc and Demo
        </Typography.SubHeading>
      </a>
    </main>
  )
}
