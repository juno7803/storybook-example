import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyle } from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
