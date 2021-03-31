import * as utils from "../utils";

const ThemePallete = {
  primary: "#E84545",
  secondary: "#2B2E4A",
  black: "#2B2E4A",
  white: "#E5E5E5",
};

const txt_color = {
  primary: "#2B2E4A",
  secondary: "#E84545",
  white: ThemePallete.white,
};

export const theme = {
  bg: {
    main: "#E5E5E5",
    secondary: ThemePallete.black,
  },
  pallete: ThemePallete,
  font: {
    font_family: "Poppins",
  },
  text: {
    color: { ...txt_color },
  },
  size: utils.size,
  breakpoints: {
    min: {
      sm: utils.minOrMaxBreakpoint("min", 350),
      md: utils.minOrMaxBreakpoint("min", 750),
    },
    max: {
      sm: utils.minOrMaxBreakpoint("max", 350),
      md: utils.minOrMaxBreakpoint("max", 750),
    },
  },
};

export const dark_theme = {
  ...theme,
  bg: {
    main: "#2B2E4A",
  },
  text: {
    color: {
      ...txt_color,
      primary: "#E5E5E5",
    },
  },
};
