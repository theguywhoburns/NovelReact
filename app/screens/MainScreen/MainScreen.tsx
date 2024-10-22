import { LabeledRadioButton } from "app/components/LabeledRadioButton"
import { LabeledSwitch } from "app/components/LabeledSwitch"
import { RangeInput } from "app/components/RangeInput"
import { SettingsList } from "app/components/SettingsList/SettingsList"
import { UserCards } from "app/components/UserCards"
import User from "app/utils/user"
import BackSvg from "assets/icons/main/back.svg"
import Cross from "assets/icons/main/cross.svg"
import Diamond from "assets/icons/main/diamond.svg"
import Heart from "assets/icons/main/heart.svg"
import LeftArrowSvg from "assets/icons/main/left-arrow.svg"
import SettingsGearSvg from "assets/icons/main/menu/settings-gear.svg"
import ShieldSvg from "assets/icons/main/menu/shield.svg"
import React, { FC, useEffect, useRef, useState } from "react"
import { Modal, Platform, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Button, Screen, Text } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"

export const MainScreen: FC<MainTabScreenProps<"Main">> = function MainScreen(_props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const [ShowPeopleInDistance, setShowPeopleInDistance] = useState(false)
  const [ShowPeopleInAge, setShowPeopleInAge] = useState(false)
  const [showMeToMen, setShowMeToMen] = useState(false)
  const [showMeToWomen, setShowMeToWomen] = useState(false)
  const [isUserVerified, setIsUserVerified] = useState(false)

  const [isAries, setIsAries] = useState(false)

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  return (
    <Screen style={$screen} contentContainerStyle={$screenContent}>
      <Modal visible={isSettingsOpen}>
        <View style={$settingsModal}>
          <View style={$settingsModalHeader}>
            <TouchableOpacity onPress={() => setIsSettingsOpen(false)} style={$settingsModalBtn}>
              <BackSvg />
            </TouchableOpacity>
            <Text style={$settingsModalHeaderText}>Параметры поиска</Text>
          </View>
          <ScrollView style={$settingsModalScrollView}>
            {/* TODO: Swap the placeholder view to the implemented in future auto svg component */}
            <View style={$settingsModalBaseSubscriptionBanner}>
              <Text style={$settingsModalBaseSubscriptionTitleText}>Базовая подписка</Text>
              <Text style={$settingsModalBaseSubscriptionSubTitleText}>
                Расширь свои возможности
              </Text>
            </View>

            <RangeInput label="Расстояние" min={0} max={100} unit="км" containerWidth="50%" />
            <LabeledSwitch
              label="Показывать людей в диапазоне"
              value={ShowPeopleInDistance}
              onValueChange={setShowPeopleInDistance}
            />
            <View style={$settingsModalSeparator} />

            <RangeInput label="Возраст" min={18} max={99} unit="лет" containerWidth="50%" />
            <LabeledSwitch
              label="Показывать людей в диапазоне"
              value={ShowPeopleInAge}
              onValueChange={setShowPeopleInAge}
            />
            <LabeledSwitch
              label="Показывать меня мужчинами"
              value={showMeToMen}
              onValueChange={setShowMeToMen}
            />
            <LabeledSwitch
              label="Показывать меня женщинами"
              value={showMeToWomen}
              onValueChange={setShowMeToWomen}
            />

            <View style={$settingsModalBaseSubscriptionBanner}>
              <Text style={$settingsModalBaseSubscriptionTitleText}>Продвинутая подписка</Text>
              <Text style={$settingsModalBaseSubscriptionSubTitleText}>
                Подбирай партнёра по интересам
              </Text>
            </View>

            <LabeledSwitch
              label="Пользователь верифицирован"
              value={isUserVerified}
              onValueChange={setIsUserVerified}
            />

            <LabeledRadioButton label="Овен" isSelected={isAries} setIsSelected={setIsAries} />

            <SettingsList />
          </ScrollView>
        </View>
      </Modal>
      <View style={$header}>
        {/* Novel app logo should be here */}
        <Button style={$headerBtn}>
          <ShieldSvg />
        </Button>
        <Button onPress={() => setIsSettingsOpen(true)} style={$headerBtn}>
          <SettingsGearSvg />
        </Button>
      </View>
      <UserCards users={Users} />
      <View style={$lilMenu}>
        <Button style={$lilMenuBtn}>
          <LeftArrowSvg style={$lilMenuSideSvg} />
        </Button>
        <Button style={$lilMenuBtn}>
          <Cross style={$lilMenuSvg} />
        </Button>
        <Button style={$lilMenuBtn}>
          <Heart style={$lilMenuSvg} />
        </Button>
        <Button style={$lilMenuBtn}>
          <Diamond style={$lilMenuSideSvg} />
        </Button>
      </View>
    </Screen>
  )
}

const Users: User[] = [
  {
    id: "1",
    imageUri: "",
    isPopular: true,
    name: "John Doe",
    description: "",
    age: 28,
    job: "Software Engineer",
    distance: "1 mile away",
  },
  {
    id: "2",
    imageUri: "",
    isPopular: false,
    name: "Jane Doe",
    description: "",
    age: 27,
    job: "Software Engineer but different",
    distance: "1 mile away",
  },
]

const $settingsModalScrollView: ViewStyle = {
  width: "50%",
  alignSelf: "center",
}

const $settingsModal: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $settingsModalHeader: ViewStyle = {
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  height: null,
}

const $settingsModalHeaderText: TextStyle = {
  flex: 1,
  fontSize: 24,
  marginTop: spacing.sm,
  textAlign: "center",
  fontWeight: "bold",
  color: colors.palette.mainText,
  height: null,
}

const $settingsModalBtn: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  width: 38,
  height: 38,
  borderRadius: 19,
  backgroundColor: colors.palette.neutral100,
  borderColor: colors.transparent,
}

const $settingsModalBaseSubscriptionBanner: ViewStyle = {
  flex: 1,
  backgroundColor: colors.errorBackground,
  marginVertical: spacing.md,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xxxl,
  borderRadius: 6,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $settingsModalBaseSubscriptionTitleText: TextStyle = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 24,
  color: colors.palette.secondary300,
  marginBottom: spacing.xxs,
}

const $settingsModalBaseSubscriptionSubTitleText: TextStyle = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 14,
}

const $settingsModalSeparator: ViewStyle = {
  borderColor: "#C8CDDF",
  borderBottomColor: "#C8CDDF",
  borderWidth: 1, // important
  borderBottomWidth: 1,
  width: "100%",
  alignSelf: "center",
  marginVertical: spacing.md,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.sm,
}

const $headerBtn: ViewStyle = {
  marginStart: spacing.sm,
  backgroundColor: colors.transparent,
  borderColor: colors.transparent,
}

const $lilMenu: ViewStyle = {
  flex: 1,
  position: "absolute",
  flexDirection: "row",
  bottom: 0,
  alignSelf: "center",
  maxWidth: "50%",
}

const $lilMenuBtn: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.background,
  borderColor: "transparent",
}

const lilMenuSvgScale = Platform.OS !== "web" ? [{ scale: 1.75 }] : undefined
const $lilMenuSvg: ViewStyle = {
  minWidth: 54 * 1.25,
  minHeight: 54 * 1.25,
  transform: lilMenuSvgScale,
}

const $lilMenuSideSvg: ViewStyle = {
  minWidth: 38 * 1.25,
  minHeight: 38 * 1.25,
  transform: lilMenuSvgScale,
}

const $screen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $screenContent: ViewStyle = {
  flex: 1,
  paddingTop: spacing.lg,
  paddingBottom: spacing.lg,
}
