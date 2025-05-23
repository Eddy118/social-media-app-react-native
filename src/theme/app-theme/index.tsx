import {colors} from "../colors";

export const LightTheme = {
    background: colors.white,
    text: '#000000',
};

export const DarkTheme = {
    background: colors.primary,
    text: '#ffffff',
};

export type ThemeType = typeof DarkTheme