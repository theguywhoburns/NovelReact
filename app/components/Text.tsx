import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { isRTL, translate, TxKeyPath } from "../i18n"
import { useTheme } from "../theme"
import { I18n } from "i18n-js"

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: I18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * Text weight modifier.
   */
  weight?: string // Change to string if typography.primary doesn't define weights
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
  const { weight, tx, txOptions, text, children, style: $styleOverride, ...rest } = props
  
  const { typography } = useTheme() // Using useTheme to get typography and colors

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const $sizeStyles = {
    xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
    xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
    lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
    md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
    sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
    xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
    xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
  }
  
  // Assuming typography.primary returns an object with keys as font weight names and values as font families.
  const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } }
  }, {}) as Record<string, TextStyle> // Using string for weights
  
  const $baseStyle: StyleProp<TextStyle> = {
    ...$sizeStyles.sm,
    ...$fontWeightStyles.normal, // Change as needed based on your typography object
    color: "#000",
  }
  
  
  const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}

  const $styles: StyleProp<TextStyle> = [
    $rtlStyle,
    $baseStyle,
    weight && $fontWeightStyles[weight],
    $sizeStyles.md, // Change as needed
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}