import { ThemeProvider } from "@emotion/react";
import { GlobalStyle, theme } from "../styles";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
