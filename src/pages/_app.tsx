import 'Main/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'

import '@fontsource/montserrat'
import '@fontsource/yeseva-one'
import theme from 'Main/components/extendedTheme/extendedTheme'
import Fonts from 'Main/fonts/Fonts'
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraBaseProvider theme={theme}>
    <Fonts />
    <Component {...pageProps} />
  </ChakraBaseProvider>
}
