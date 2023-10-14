import React from 'react'
import type { Preview } from '@storybook/react'
import { customViewports } from './viewports'
import clsx from 'clsx'
import '../src/global/styles/normalize.scss'
import {rubik, nunito} from '../src/global/fonts'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: { viewports: customViewports },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    
  },
  decorators: [
    //TODO: Set global variables: e. g. Nextjs fonts - className={clsx(anyFont.variable, anyFont2.variable)}
    (Story) => (
      <div id="variables" className={clsx(rubik.variable, nunito.variable )} >
        <Story />
      </div>
    ),
  ],
}

export default preview
