import "Main/styles/globals.css";
import "Main/styles/markdown.css";
import "highlight.js/styles/github-dark.css";
import "highlight.js/lib/languages/csharp";
import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";

import "@fontsource/montserrat";
import "@fontsource/yeseva-one";
import "@fontsource/nunito";
import theme from "Main/components/theme/theme";
import Fonts from "Main/fonts/Fonts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
