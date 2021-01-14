import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title> Next.js React app - Boilerplate </title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple boilerplate to have a NextJS project with React, TypeScript, Storybook and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
