import styled, { css } from "styled-components";
import { themes } from "../context/themes";
// TS
import { ColorsEnum, DarkThemeEnum } from "../ts/enums";
import { ButtonProps } from "../ts/interfaces";

const colorToCss = (
  isDarkMode: ButtonProps["isDark"],
  color: ButtonProps["color"]
) => {
  switch (color) {
    case ColorsEnum.RED:
      return css`
        background-color: ${isDarkMode
          ? themes.darkMode.buttonBackgroundColor
          : themes.lightMode.buttonBackgroundColor};
        color: ${ColorsEnum.CHOSEN_RED};
        &:hover {
          background-color: ${DarkThemeEnum.BUTTON_HOVER_DARK_COLOR};
        }
      `;
    case ColorsEnum.GREEN:
      return css`
        background-color: ${isDarkMode
          ? themes.darkMode.buttonBackgroundColor
          : themes.lightMode.buttonBackgroundColor};
        color: ${ColorsEnum.CHOSEN_GREEN};
        &:hover {
          background-color: ${DarkThemeEnum.BUTTON_HOVER_DARK_COLOR};
        }
      `;
    case ColorsEnum.WHITE:
      return css`
        background-color: ${isDarkMode
          ? themes.darkMode.buttonBackgroundColor
          : themes.lightMode.buttonBackgroundColor};
        color: ${isDarkMode
          ? themes.darkMode.fontColor
          : themes.lightMode.fontColor};
        &:hover {
          background-color: ${DarkThemeEnum.BUTTON_HOVER_DARK_COLOR};
          color: ${themes.lightMode.fontColor};
        }
      `;
  }

  return css`
    background-color: ${props =>
      props
        ? themes.darkMode.displayBackgroundColor
        : themes.lightMode.displayBackgroundColor};
    color: ${props =>
      props ? themes.darkMode.fontColor : themes.lightMode.fontColor};
    &:hover,
    &:focus {
      background-color: ${DarkThemeEnum.BUTTON_DARK_COLOR};
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 25%;
  padding-top: 1em;
  padding-bottom: 1em;
  /* transition: background-color 0.3s ease-in-out, opacity 0.15s ease-in-out; */
  ${({ isDark, color }) => colorToCss(isDark, color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}
position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }
  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;
