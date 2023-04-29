import type { Preview } from '@storybook/react'
import '../src/assets/styles/globals.css'

const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

const tailwindViewPorts = Object.fromEntries(
  Object.entries(tailwindBreakpoints).map(([key, val], idx) => {
    console.log(val)
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`
        }
      }
    ]
  })
)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: { viewports: tailwindViewPorts }
  }
}

export default preview
