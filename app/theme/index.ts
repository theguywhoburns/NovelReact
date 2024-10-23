import { useTheme as usePaperTheme } from "react-native-paper"
import { lightTheme } from "./theme"
export * from "./colors"
export * from "./spacing"
export * from "./typography"
export * from "./timing"
export * from "./theme"

export const useTheme = <T = typeof lightTheme>() => {
    const mainTheme = usePaperTheme<typeof lightTheme>()
    return mainTheme as T
}