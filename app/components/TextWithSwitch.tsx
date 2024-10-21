import React from "react"
import { Switch, SwitchProps, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "./Text"

export interface ITextSwitch extends SwitchProps {
    text: string
    props: SwitchProps
  }
  
  export const TextSwitch = ({ text, props}: ITextSwitch) => (
    <View style={$switchContainer}>
      <Text style={$settingsModalTextWithSwitchText}>{text}</Text>
      <Switch {...props} style={$settingsModalTextWithSwitchSwitch} />
    </View>
  )
  
  const $switchContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  };
  
  const $settingsModalTextWithSwitchText: TextStyle = {
    fontFamily: 'Lato',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
  };
  
  const $settingsModalTextWithSwitchSwitch: ViewStyle = {
    alignSelf: "flex-end",
  };