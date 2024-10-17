import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { MainScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import Loopa from "assets/icons/main/menu/Loopa"
import Video from "assets/icons/main/menu/Video"
import Cup   from "assets/icons/main/menu/Cup"
import Chat  from "assets/icons/main/menu/Chat"
import Account  from "assets/icons/main/menu/Account"
import { ReelsScreen } from "app/screens/MainScreen/ReelsScreen"
import { PlacesScreen } from "app/screens/MainScreen/PlacesScreen"
import { ChatScreen } from "app/screens/MainScreen/ChatScreen"
export type MainTabParamList = {
  Main: undefined,
  Reels: undefined,
  Places: undefined,
  Chat: { chatId: number },
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export function MainNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: "",// Ноунеймы все у нас ахахахах, я пошёл импортировать все иконки
          tabBarIcon: ({focused}) => (
            <Loopa focused={focused}/>
          ),
        }}
      />

      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarLabel: "",// Ноунеймы все у нас ахахахах, я пошёл импортировать все иконки
          tabBarIcon: ({focused}) => (
            <Video focused={focused}/>
          ),
        }}
      />

      <Tab.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          tabBarLabel: "",// Ноунеймы все у нас ахахахах, я пошёл импортировать все иконки
          tabBarIcon: ({focused}) => (
            <Cup focused={focused}/>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "",// Ноунеймы все у нас ахахахах, я пошёл импортировать все иконки
          tabBarIcon: ({focused}) => (
            <Chat focused={focused}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
