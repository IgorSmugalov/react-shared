import React from 'react'
import type { Preview } from '@storybook/react'
import { customViewports } from './viewports'
import '../src/global/styles/normalize.scss'


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
      <div id="variables" >
        <Story />
      </div>
    ),
  ],
}

export default preview
