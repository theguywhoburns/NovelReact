import {
    MD3LightTheme as DefaultLightTheme,
    MD3DarkTheme as DefaultDarkTheme,
} from 'react-native-paper';
import { spacing } from './spacing';
import { timing } from './timing';
import { typography } from './typography';
import { colors } from './colors';

const defaultThemeValues = {
    spacing : {
        ...spacing
    },
    timing: {
        ...timing
    },
    typography: {
        ...typography
    }
};

export const lightTheme = {
    ...DefaultLightTheme,
    ...defaultThemeValues,
    colors: {
        ...DefaultLightTheme.colors,
        ...colors
    }
}

export const darkTheme : typeof lightTheme = {
    ...DefaultDarkTheme,
    ...defaultThemeValues,
    colors: {
        ...DefaultDarkTheme.colors,
        ...colors
    }
}