import styled from "styled-components";
import { themes } from "../context/themes";
import { ColorsEnum } from "../ts/enums";
import { StyledProp } from "../ts/interfaces";

const StyledColorThemePicker = styled.button<StyledProp>`
  margin: 0 auto;
  padding: 1em 1.7em;
  border-radius: 18px;
  border: none;
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.buttonBackgroundColor
      : themes.lightMode.buttonBackgroundColor};
  display: flex;
  transition: background-color 0.25s ease-in-out, opacity 0.25s ease-in-out;
  flex-direction: row;
  gap: 32px;
  &:hover {
    cursor: pointer;
    background-color: ${ColorsEnum.CHOSEN_GREEN};
  }
`;

export default StyledColorThemePicker;
