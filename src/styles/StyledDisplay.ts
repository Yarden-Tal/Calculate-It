import styled from "styled-components";
import { DarkThemeEnum } from "../ts/enums";

export const StyledIndicatorList = styled.div`
  color: ${DarkThemeEnum.FONT_DARK_COLOR};
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

export const StyledScreen = styled.div`
  color: ${DarkThemeEnum.FONT_DARK_COLOR};
  font-size: 3.4em;
  min-height: 1.4em;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledDisplay = styled.div`
  background-color: ${DarkThemeEnum.DISPLAY_DARK_COLOR};
  padding: 0.5em 1em;
  border-radius: 20px;
`;

export default StyledDisplay;
