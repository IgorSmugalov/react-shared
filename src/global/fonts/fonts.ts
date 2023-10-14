import { Nunito, Rubik } from 'next/font/google'

export const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--rubikFont',
})

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--nunitoFont',
})
