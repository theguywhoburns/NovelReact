import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "app/theme";
import App from "./app/app"
SplashScreen.preventAutoHideAsync()
function IgniteApp() {
  return (
    <PaperProvider theme={lightTheme}>
      <App hideSplashScreen={SplashScreen.hideAsync} />
    </PaperProvider>
  )
}

export default IgniteApp