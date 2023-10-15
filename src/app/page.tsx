'use client'

import { Typography } from "@shared/ui"

const a = 0

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
        href="https://igorsmugalov.github.io/react-ui"
        style={{ textDecoration: 'none' }}
      >
        <Typography.SubHeading variant={'primary'}>
          Go to Doc and Demo
        </Typography.SubHeading>
      </a>
    </main>
  )
}
