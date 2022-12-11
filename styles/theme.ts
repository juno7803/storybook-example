import { colors, Colors } from "./colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
    // TODO: typography 등을 같은 방식으로 설정해주세요.
  }
}

export const theme = {
  colors,
};
