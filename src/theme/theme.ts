// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";

export const theme = {
  color: {
    primaryBlue: "#011638",
    secondaryBlue: "#2e86ab",
    outline: "#cdcdcd",
    white: "#fff",
    black: "#000",
    calPolyGreen: "#214e34",
    honeydew: "#ffefd5",
    red: "#ff0000",
  },
  mq: {
    small: "576px",
    medium: "768px",
    large: "992px",
    extraLarge: "1200px",
  },
};

export type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
