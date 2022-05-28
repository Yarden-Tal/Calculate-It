import styled from "styled-components";
import { themes } from "../context/themes";
import { StyledProp } from "../ts/interfaces";

export const StyledIndicatorList = styled.div<StyledProp>`
  color: ${props =>
    props.isDark ? themes.darkMode.fontColor : themes.lightMode.fontColor};
  font-size: 0.75em;
  line-height: 1;
  min-height: 1em;
  display: flex;
  justify-content: flex-end;
`;

export const StyledExpression = styled.div`
  font-size: 2em;
  text-align: right;
`;

export const StyledScreen = styled.div<StyledProp>`
  color: ${props =>
    props.isDark ? themes.darkMode.fontColor : themes.lightMode.fontColor};
  font-size: 3.4em;
  font-weight: 600;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledDisplay = styled.div<StyledProp>`
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.displayBackgroundColor
      : themes.lightMode.displayBackgroundColor};
  padding: 0.5em 1em;
  border-radius: 20px;
  height: 40%;
`;

export default StyledDisplay;
