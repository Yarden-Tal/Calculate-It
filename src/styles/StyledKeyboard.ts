// Style
import styled from "styled-components";
// TS
import { DarkThemeEnum } from "../ts/enums";

const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
  background-color: ${DarkThemeEnum.KEYBOARD_DARK_COLOR};
  padding: 1.5rem;
  border-radius: 5%;
`;

export default StyledKeyboard;
