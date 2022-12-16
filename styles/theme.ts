import { colors, Colors } from "./colors";

/**
 * declare 키워드로 @emotion/react의 d.ts를 overwrite 할 수 있어요.
 * emotion의 theming을 사용하면, light mode, dark mode의 스위칭을 쉽게 구현할 수 있어요!
 * <ThemeProvider> 라는 provider를 전역에 감싸주어 프로젝트의 theming을 담당하게 해 주세요.
 * https://emotion.sh/docs/theming
 * */
declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
    // TODO: typography 등을 같은 방식으로 설정해주세요.
  }
}

export const theme = {
  colors,
};
