// Style
import styled from "styled-components";
import { themes } from "../context/themes";
import { StyledProp } from "../ts/interfaces";
// TS

export const StyledKBContainer = styled.div<StyledProp>`
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.displayBackgroundColor
      : themes.lightMode.displayBackgroundColor};
  height: 60%;
`;
