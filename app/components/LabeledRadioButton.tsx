import React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "./Text"

export interface IRadioInput {
  label: string
  isSelected: boolean
  setIsSelected: (isChecked: boolean) => void
}

export const LabeledRadioButton = ({ label, isSelected, setIsSelected }: IRadioInput) => {
  return (
    <View style={$wrapper}>
      <Text style={[$label, isSelected && $activeLabel]}>{label}</Text>

      <TouchableOpacity
        style={$radioButton}
        activeOpacity={1}
        onPress={() => setIsSelected(!isSelected)}
      >
        {isSelected ? <View style={$radioButtonInner} /> : null}
      </TouchableOpacity>
    </View>
  )
}

const $wrapper: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $label: ViewStyle = {
  flex: 1,
}

const $activeLabel: TextStyle = {
  color: "#FB847B",
}

const $radioButton: ViewStyle = {
  height: 20,
  width: 20,
  borderRadius: 10,
  borderWidth: 5,
  borderColor: "#E7E8EC",
  justifyContent: "center",
}

const $radioButtonInner: ViewStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  backgroundColor: "#FB847B",
}
