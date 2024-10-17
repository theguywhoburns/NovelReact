import React, { FC, useEffect, useRef, useState, } from "react"
import { Modal, Platform, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"
import { UserCards } from "app/components/UserCards"
import SettingsGearSvg from "assets/icons/main/menu/settings-gear.svg"
import ShieldSvg from "assets/icons/main/menu/shield.svg"
import LeftArrowSvg from "assets/icons/main/left-arrow.svg"
import Cross from "assets/icons/main/cross.svg"
import Heart from "assets/icons/main/heart.svg"
import Diamond from "assets/icons/main/diamond.svg"
import User from "app/utils/user"
import BackSvg from "assets/icons/main/back.svg"
import { ScrollView, Switch } from "react-native-gesture-handler"
import { RangeInput } from "app/components/RangeInput"

const TextSwitch = ({ text, props} : any) => (
  <View style={$settingsModalTextWithSwitch}>
    <Text style={$settingsModalTextWithSwitchText}>{text}</Text>
    <Switch {...props} style={$settingsModalTextWithSwitchSwitch} />
  </View>
)

export const MainScreen: FC<MainTabScreenProps<"Main">> =
  function MainScreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [ShowPplInAgeRange, setShowPplInAgeRange] = useState(false)
    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])
    
    return (      
      <Screen
        style={$screen}
        contentContainerStyle={$screenContent}
      >
        <Modal visible={isSettingsOpen}> 
          <View style={$settingsModal}>
          <View style={$settingsModalHeader}> 
            <TouchableOpacity onPress={() => setIsSettingsOpen(false)} style={$settingsModalBtn}><BackSvg /></TouchableOpacity> 
            <Text style={$settingsModalHeaderText}>Параметры поиска</Text>
          </View>
          <ScrollView style={{width: "90%", alignSelf: "center"}}>
            {/* TODO: Swap the placeholder view to the implemented in future auto svg component */}
            <View style={$settingsModalBaseSubscriptionBanner}>
              <Text style={$settingsModalBaseSubscriptionTitleText}>Базовая подписка</Text>
              <Text style={$settingsModalBaseSubscriptionSubTitleText}>Расширь свои возможности</Text>
            </View>
            <RangeInput label="Возраст" min={18} max={99} unit="лет" containerWidth="90%" />
            <TextSwitch text="Показывать людей в возрасте" props={{value: ShowPplInAgeRange, onValueChange: setShowPplInAgeRange}}/>
            <View style={$settingsModalSeparator} />
            

          </ScrollView>
          </View>
        </Modal>
        <View style={$header}>
          {/* Novel app logo should be here */}
          <Button style={$headerBtn}><ShieldSvg/></Button>
          <Button onPress={() => setIsSettingsOpen(true)} style={$headerBtn}><SettingsGearSvg /></Button>
        </View>
        <UserCards users={Users} /> 
        <View style={$lilMenu}>
          <Button style={$lilMenuBtn}><LeftArrowSvg style={$lilMenuSideSvg} /></Button>
          <Button style={$lilMenuBtn}><Cross style={$lilMenuSvg} /></Button>
          <Button style={$lilMenuBtn}><Heart style={$lilMenuSvg}/></Button>
          <Button style={$lilMenuBtn}><Diamond style={$lilMenuSideSvg}/></Button>
        </View>
      </Screen>
    )
  }

const Users : User[] = [
  {
    id: "1", 
    imageUri: "", 
    isPopular: true, 
    name: "John Doe", 
    description: "", 
    age: 28, 
    job: "Software Engineer", 
    distance: "1 mile away"
  },
  {
    id: "2", 
    imageUri: "", 
    isPopular: false, 
    name: "Jane Doe", 
    description: "", 
    age: 27, 
    job: "Software Engineer but different", 
    distance: "1 mile away"
  }
]

const $settingsModal: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $settingsModalHeader: ViewStyle = {
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  height: null,
};

const $settingsModalHeaderText: TextStyle = {
  flex: 1,
  fontSize: 24,
  marginTop: spacing.sm,
  textAlign: "center",
  fontWeight: "bold",
  color: colors.palette.mainText,
  height: null,
};

const $settingsModalBtn: ViewStyle = {
  width: 38,
  height: 38,
  borderRadius: 19,
  backgroundColor: colors.palette.neutral100,
  borderColor: colors.transparent,
  position: "absolute",
  left: spacing.xs,
  top: spacing.xs,
  alignSelf: "center",
  alignItems:"center",
  justifyContent: "center",
};

const $settingsModalBaseSubscriptionBanner : ViewStyle = {
  flex: 1,
  backgroundColor: colors.errorBackground,
  marginVertical: spacing.md,
  borderRadius: 6,
  height: 300,
  width: 400,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
};

const $settingsModalBaseSubscriptionTitleText: TextStyle = {
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 24,
  color: colors.palette.secondary300,
};

const $settingsModalBaseSubscriptionSubTitleText: TextStyle = {
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 14,
};

const $settingsModalTextWithSwitch: ViewStyle = {
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
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

const $settingsModalSeparator: ViewStyle = {
  borderColor: '#C8CDDF',
  borderBottomColor: '#C8CDDF',
  borderWidth: 1, // important
  borderBottomWidth: 1,
  width: '100%',
  alignSelf: 'center',
  marginVertical: spacing.md,
};

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

const $lilMenu : ViewStyle = {
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
  borderColor: "transparent"
}

const lilMenuSvgScale = Platform.OS !== "web" ? [{ scale: 1.75}] : undefined;
const $lilMenuSvg: ViewStyle = {
  minWidth: 54 * 1.25,
  minHeight: 54 * 1.25,
  transform: lilMenuSvgScale
}

const $lilMenuSideSvg: ViewStyle = {
  minWidth: 38 * 1.25,
  minHeight: 38 * 1.25,
  transform: lilMenuSvgScale
}

const $screen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $screenContent: ViewStyle = {
  flex: 1,
  paddingTop: spacing.lg,
  paddingBottom: spacing.lg,
};