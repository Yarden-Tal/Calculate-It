// Style
import styled from "styled-components";
// Context
import { themes } from "../context/themes";
// TS
import { StyledProp } from "../ts/interfaces";

export const StyledKBContainer = styled.div<StyledProp>`
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.displayBackgroundColor
      : themes.lightMode.displayBackgroundColor};
  height: 60%;
  border-radius: 25px;
`;
