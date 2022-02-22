import React from "react";
// Styles
import StyledDisplay, {
  StyledIndicatorList,
  StyledExpression,
  StyledScreen,
} from "../styles/StyledDisplay";
// TS
import { IDisplayProps } from "../ts/interfaces";

export const Display = (props: IDisplayProps) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        {props.hasMemory && <span>M</span>}

        <StyledExpression>{props.expression}</StyledExpression>
      </StyledIndicatorList>

      <StyledScreen>{props.value}</StyledScreen>
    </StyledDisplay>
  );
};

export default Display;
