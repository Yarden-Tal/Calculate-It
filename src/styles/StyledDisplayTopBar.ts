import styled from "styled-components";
import { themes } from "../context/themes";
import { StyledProp } from "../ts/interfaces";

const StyledDisplayTopBar = styled.div<StyledProp>`
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.displayBackgroundColor
      : themes.lightMode.displayBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default StyledDisplayTopBar;
