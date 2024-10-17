import React, { FC, useEffect, useRef, } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"
export const ReelsScreen: FC<MainTabScreenProps<"Reels">> =
  function ReelsScreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    return (      
      <Screen
        style={$screen}
        contentContainerStyle={$screenContent}
      >
        <Text>Reels</Text>
      </Screen>
    )
  }

const $screen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $screenContent: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.lg,
};