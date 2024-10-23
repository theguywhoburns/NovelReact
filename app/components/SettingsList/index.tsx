import React, { useCallback, useState } from "react"
import { View } from "react-native"
import { ISettingsItem, SettingsItem } from "./SettingsItem"

interface ISettingsListProps {
  settingsArray: ISettingsItem[]
}

export const SettingsList = () => {
  const [settings, setSettings] = useState<ISettingsItem[]>([
    {
      Icon: null,
      title: "Profile",
      isModalVisible: false,
      setIsModalVisible: () => {},
      options: [
        { label: "asdf", onPress: () => {} },
        { label: "qwer", onPress: () => {} },
      ],
    },
    {
      Icon: null,
      title: "Settings",
      isModalVisible: false,
      setIsModalVisible: () => {},
      options: [],
    },
  ])

  const handleModalVisibility = useCallback(
    (index: number, isVisible: boolean) => {
      setSettings((prevSettings) =>
        prevSettings.map((setting, i) =>
          i === index ? { ...setting, isModalVisible: isVisible } : setting,
        ),
      )
    },
    [setSettings],
  )

  const handleSetIsModalVisible = useCallback(
    (index: number, isVisible: boolean) => {
      handleModalVisibility(index, isVisible)
    },
    [handleModalVisibility],
  )

  return (
    <View>
      {settings.map((item, index) => (
        <SettingsItem
          key={index}
          Icon={item.Icon}
          title={item.title}
          isModalVisible={item.isModalVisible}
          setIsModalVisible={() => handleSetIsModalVisible(index, !item.isModalVisible)}
          options={item.options}
        />
      ))}
    </View>
  )
}
