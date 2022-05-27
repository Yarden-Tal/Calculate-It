// TS
import { ReactNode } from "react";
import {
  ColorsEnum,
  DarkThemeEnum,
  LightThemeEnum,
  OperatorEnum,
} from "./enums";
import { DigitType } from "./types";

export interface KeyboardProps {
  onDigitButtonClick: (digit: DigitType) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: OperatorEnum) => void;
  onChangeSignButtonClick: () => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onPrecentButtonClick: () => void;
}

export interface DisplayProps {
  expression: string;
  value: string;
  handleToggle: () => void;
}

export interface ButtonProps {
  isDark?: boolean;
  color: ColorsEnum;
  isLarge?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export interface ColorTheme {
  fontColor: DarkThemeEnum | LightThemeEnum;
  displayBackgroundColor: DarkThemeEnum | LightThemeEnum;
  keyboardBackgroundColor: DarkThemeEnum | LightThemeEnum;
  buttonBackgroundColor: DarkThemeEnum | LightThemeEnum;
}

export interface ColorThemes {
  darkMode: ColorTheme;
  lightMode: ColorTheme;
}

export interface ColorThemeContextProps {
  isDarkMode: boolean;
  handleToggle: () => void;
}

export interface StyledProp {
  isDark: boolean;
}
