import styled from "styled-components";
import { StyledProp } from "../ts/interfaces";

const StyledClock = styled.div<StyledProp>`
  color: ${props => (props.isDark ? "white" : "black")};
`;

export default StyledClock;
