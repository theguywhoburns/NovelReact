import React, { FC, useEffect, useRef, } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"
export const PlacesScreen: FC<MainTabScreenProps<"Places">> =
  function PlacesScreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()
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
    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    return (      
      <Screen
        style={$screen}
        contentContainerStyle={$screenContent}
      >
        <Text>Places</Text>
      </Screen>
    )
  }

