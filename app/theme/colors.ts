interface paletteBase {
  neutral100: string,
  neutral200: string,
  neutral300: string,
  neutral400: string,
  neutral500: string,
  neutral600: string,
  neutral700: string,
  neutral800: string,
  neutral900: string,

  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary500: string,
  primary600: string,

  secondary100: string,
  secondary200: string,
  secondary300: string,
  secondary400: string,
  secondary500: string,

  accent100: string,
  accent200: string,
  accent300: string,
  accent400: string,
  accent500: string,

  angry100: string,
  angry500: string,

  overlay20: string,
  overlay50: string,
  gray: string,
  mainText: string
  svgLinearGradient1: string,
  svgLinearGradient2: string,
  svgLinearGradient3: string,
};

const lightPalette: paletteBase = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
  gray: "#C8CDDF",
  mainText: "#FB847B",
  svgLinearGradient1: "#FF627E",
  svgLinearGradient2: "#F4CD76",
  svgLinearGradient3: "#FFF8F8",
} as const;

const darkPalette: paletteBase = {
  neutral100: "#1C1C1E",
  neutral200: "#2C2C2E",
  neutral300: "#3A3A3C",
  neutral400: "#48484A",
  neutral500: "#636366",
  neutral600: "#8E8E93",
  neutral700: "#AEAEB2",
  neutral800: "#C7C7CC",
  neutral900: "#E5E5EA",

  primary100: "#3B3B3D",
  primary200: "#545457",
  primary300: "#6E6E71",
  primary400: "#87878B",
  primary500: "#A0A0A5",
  primary600: "#B9B9C1",

  secondary100: "#2F2F3A",
  secondary200: "#474755",
  secondary300: "#5E5E70",
  secondary400: "#76768B",
  secondary500: "#8D8DA6",

  accent100: "#3A2F2F",
  accent200: "#544747",
  accent300: "#6E5E5E",
  accent400: "#877676",
  accent500: "#A08D8D",

  angry100: "#3C2A2A",
  angry500: "#8B0000",

  overlay20: "rgba(28, 28, 30, 0.2)",
  overlay50: "rgba(28, 28, 30, 0.5)",
  gray: "#3A3A3C",
  mainText: "#E5E5EA",
  svgLinearGradient1: "#FF3B30",
  svgLinearGradient2: "#FF9500",
  svgLinearGradient3: "#FFCC00",
} as const;


export const colors = {
  /**
   * The paletteBase is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette : lightPalette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: lightPalette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: lightPalette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: lightPalette.neutral200,
  /**
   * The default border color.
   */
  border: lightPalette.neutral400,
  /**
   * The main tinting color.
   */
  tint: lightPalette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: lightPalette.neutral300,
  /**
   * Error messages.
   */
  error: lightPalette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: lightPalette.angry100,
}