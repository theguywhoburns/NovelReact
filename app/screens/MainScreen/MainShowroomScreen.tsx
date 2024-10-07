import React, { FC, useEffect, useRef, } from "react"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"
import { UserCard } from "app/components/UserCard/UserCard"
import LeftArrowSvg from "assets/icons/main/left-arrow.svg"
export const MainShowroomScreen: FC<MainTabScreenProps<"MainShowroom">> =
  function DemoShowroomScreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    return (      
      <Screen
        style={$screen}
        contentContainerStyle={$screenContent}
      >
        <LeftArrowSvg/>
        <UserCard users={[{id: "1", imageUri: "", isPopular: true, name: "John Doe", description: "", age: 28, job: "Software Engineer", distance: "1 mile away"}]}/> 
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