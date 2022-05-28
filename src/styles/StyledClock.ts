import styled from "styled-components";
import { StyledProp } from "../ts/interfaces";

const StyledClock = styled.a<StyledProp>`
  text-decoration: none;
  color: ${props => (props.isDark ? "white" : "black")};
`;

export default StyledClock;
