import styled from "styled-components";
import { themes } from "../context/themes";
import { StyledProp } from "../ts/interfaces";

const StyledApp = styled.div<StyledProp>`
  border-radius: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  width: 100%;
  -webkit-box-shadow: 1px 1px 15px 1px #000000;
  box-shadow: 1px 1px 15px 1px
    ${props =>
      props.isDark
        ? themes.darkMode.displayBackgroundColor
        : themes.lightMode.displayBackgroundColor};
  max-width: 365px;
  min-width: 290px;
`;

export default StyledApp;
