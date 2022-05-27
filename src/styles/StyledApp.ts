import styled from "styled-components";
import { themes } from "../context/themes";
import { ColorsEnum } from "../ts/enums";
import { StyledProp } from "../ts/interfaces";

const StyledApp = styled.div<StyledProp>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 16px;
  width: 100%;
  height: 95vh;
  -webkit-box-shadow: 1px 1px 25px 1px #000000;
  box-shadow: 1px 1px 25px 1px
    ${props =>
      props.isDark
        ? themes.darkMode.displayBackgroundColor
        : themes.lightMode.displayBackgroundColor};
  border-radius: 25px;
  max-width: 365px;
  min-width: 290px;
`;

export default StyledApp;
