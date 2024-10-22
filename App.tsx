import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import { PaperProvider } from "react-native-paper";
SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return (
    <PaperProvider>
      <App hideSplashScreen={SplashScreen.hideAsync} />
    </PaperProvider>
  )
}

export default IgniteApp
