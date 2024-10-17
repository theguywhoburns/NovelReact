import MultiSlider from "@ptomasroos/react-native-multi-slider"
import React, { useState } from "react"
import { Dimensions, Text, View, ViewStyle } from "react-native"

export interface IRangeInput {
  label: string
  min: number
  max: number
  unit: string
  width?: number
  containerWidth?: string
}

const screenWidth = Dimensions.get("window").width

export const RangeInput = ({
  label,
  min,
  max,
  unit,
  width = screenWidth,
  containerWidth = "100%",
}: IRangeInput) => {
  const [sliderValues, setSliderValues] = useState([min, max])

  const handleValuesChange = (values: number[]) => {
    setSliderValues(values)
  }

  const $container: ViewStyle = {
    flexDirection: "column",
    maxWidth: width,
    paddingHorizontal: 16,
  }

  const $labelAndValue: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
  }

  return (
    <View style={$container}>
      <View style={$labelAndValue}>
        <Text>{label}</Text>
        <Text>
          {sliderValues[0] !== sliderValues[1]
            ? sliderValues[0] + " - " + sliderValues[1] + " " + unit
            : sliderValues[0] + " " + unit}
        </Text>
      </View>
      <MultiSlider
        values={sliderValues}
        sliderLength={(width * parseInt(containerWidth)) / 100 - 32}
        onValuesChange={handleValuesChange}
        min={min}
        max={max}
        step={1}
        allowOverlap={true}
        snapped
      />
    </View>
  )
}