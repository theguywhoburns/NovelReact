import React, { FC, useEffect, useRef, } from "react"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { colors, spacing } from "../../theme"
import { UserCard } from "app/components/UserCard/UserCard"

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
        <UserCard name="Вася Пупкин" age={30} imageUri={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEVYWFn///9MTE1sbGyzs7SwsLFoaGlubm9yCKAcAAAAgklEQVR4nO3SiQnEMBRDwS9f6b/jXUgNxsHMVPAEqmT0ulUfSeVppzs2aj01bh74nzjr3ou+1ukAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+q58O2GzVaKcbtmqz0m+e2FYqmet0xzZrJj87ygB4Npc82wAAAABJRU5ErkJggg=="} isPopular={true} description={"description"} job={"job"} distance="2 km" /> 
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