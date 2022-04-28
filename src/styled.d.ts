import "styled-components";

interface fontWeight {
  tiny: 400;
  small: 500;
  medium: 700;
  large: 900;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: string;
      white: string;
    };
    fonts: Array<string>;
    fontWeight: fontWeight;
  }
}
