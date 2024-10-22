import { LabeledRadioButton } from "app/components/LabeledRadioButton"
import React, { useCallback, useState } from "react"
import { Modal, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "../../Text"

export interface ISettingsOption {
  label: string
  onPress: () => void
}

export interface ISettingsItem {
  Icon: React.FC | null
  title: string
  isModalVisible: boolean
  setIsModalVisible: (isModalVisible: boolean) => void
  options: ISettingsOption[]
}

export const SettingsItem = ({
  Icon,
  title,
  isModalVisible,
  setIsModalVisible,
  options,
}: ISettingsItem) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false)
  }, [setIsModalVisible])

  const handleOptionSelection = useCallback(
    (option: string) => {
      setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions.includes(option)) {
          return prevSelectedOptions.filter((opt) => opt !== option)
        } else {
          return [...prevSelectedOptions, option]
        }
      })
    },
    [setSelectedOptions],
  )

  return (
    <>
      <TouchableOpacity style={$item} onPress={() => setIsModalVisible(!isModalVisible)}>
        <View style={$iconAndTitleContainer}>
          <View>{Icon ? <Icon /> : <Text>No Icon</Text>}</View>
          <Text style={$title}>{title}</Text>
        </View>
        <Text>{">"}</Text>
      </TouchableOpacity>
      <Modal
        style={$modal}
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity style={$modalContainer} onPress={handleModalClose}>
          <View style={$modalInner}>
            <Text>{title}</Text>
            {options.map((option) => (
              <LabeledRadioButton
                key={option.label}
                label={option.label}
                isSelected={selectedOptions.includes(option.label)}
                setIsSelected={() => handleOptionSelection(option.label)}
              />
            ))}
          </View>
          <TouchableOpacity>Продолжить</TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

const $item: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 48,
}

const $iconAndTitleContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

const $modalInner: ViewStyle = {
  width: "70%",
  padding: 16,
}

const $title: TextStyle = {
  fontSize: 16,
  marginLeft: 10,
}

const $modal: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}

const $modalContainer: ViewStyle = {
  backgroundColor: "white",
  width: "100%",
  height: "100%",

  alignItems: "center",
}
