// TS
import { LightThemeEnum, DarkThemeEnum } from "../ts/enums";
import { ColorThemes } from "../ts/interfaces";

export const themes: ColorThemes = {
  darkMode: {
    fontColor: DarkThemeEnum.FONT_DARK_COLOR,
    displayBackgroundColor: DarkThemeEnum.DISPLAY_DARK_COLOR,
    keyboardBackgroundColor: DarkThemeEnum.KEYBOARD_DARK_COLOR,
    buttonBackgroundColor: DarkThemeEnum.BUTTON_DARK_COLOR,
  },
  lightMode: {
    fontColor: LightThemeEnum.FONT_LIGHT_COLOR,
    displayBackgroundColor: LightThemeEnum.DISPLAY_LIGHT_COLOR,
    keyboardBackgroundColor: LightThemeEnum.KEYBOARD_LIGHT_COLOR,
    buttonBackgroundColor: LightThemeEnum.BUTTON_LIGHT_COLOR,
  },
};
