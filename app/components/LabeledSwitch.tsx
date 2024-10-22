import { spacing } from "app/theme"
import React from "react"
import { Switch, SwitchProps, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "./Text"

export interface ITextSwitch extends SwitchProps {
  label: string
}

export const LabeledSwitch = ({ label, ...props }: ITextSwitch) => (
  <View style={$switchContainer}>
    <Text style={$label}>{label}</Text>
    <Switch {...props} style={$switch} />
  </View>
)

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: spacing.xs,
}

const $label: TextStyle = {
  fontFamily: "Lato",
  fontSize: 18,
  lineHeight: 18,
}

const $switch: ViewStyle = {
  alignSelf: "flex-end",
}
