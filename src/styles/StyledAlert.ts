import styled from "styled-components";
import { ColorsEnum } from "../ts/enums";

const StyledAlert = styled.div`
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  background-color: ${ColorsEnum.CHOSEN_RED};
  color: ${ColorsEnum.CHOSEN_WHITE};
  text-align: center;
  font-weight: 500;
  position: absolute;
  top: 36%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 3px 20px;
  z-index: 1;
  opacity: 1;
  animation: fade 5s linear;
`;

export default StyledAlert;
