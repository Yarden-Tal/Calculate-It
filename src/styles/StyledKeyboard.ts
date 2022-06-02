// Style
import styled from "styled-components";
import { themes } from "../context/themes";
// TS
import { StyledProp } from "../ts/interfaces";

const StyledKeyboard = styled.div<StyledProp>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
  background-color: ${props =>
    props.isDark
      ? themes.darkMode.keyboardBackgroundColor
      : themes.lightMode.keyboardBackgroundColor};
  padding: 1.5rem;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 5%;
  height: 100%;
`;

export default StyledKeyboard;
