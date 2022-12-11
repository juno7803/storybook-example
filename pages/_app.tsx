import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
