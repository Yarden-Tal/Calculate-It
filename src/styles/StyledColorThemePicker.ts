import styled from "styled-components";
import { themes } from "../context/themes";
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
  flex-direction: row;
  gap: 32px;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledColorThemePicker;
