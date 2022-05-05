import { useState } from "react";
// Styles
import StyledDisplay, {
  StyledIndicatorList,
  StyledExpression,
  StyledScreen,
} from "../styles/StyledDisplay";
// TS
import { OperatorEnum } from "../ts/enums";
import { IDisplayProps } from "../ts/interfaces";
// Components
import ColorThemePicker from "./display-components/ColorThemePicker";
import DisplayTopBar from "./display-components/DisplayTopBar";

export const Display = (props: IDisplayProps) => {
  // const [operator, setOperator] = useState<OperatorEnum>()
  // const separateOperator = (expression: string) => {
  //   for (const letter of props.expression) {
  //     if (
  //       letter === OperatorEnum.ADD ||
  //       letter === OperatorEnum.SUBTRACT ||
  //       OperatorEnum.MULTIPLY ||
  //       letter === OperatorEnum.DIVIDE
  //     ) {
  //     }
  //   }
  // };

  return (
    <div style={{ backgroundColor: "#22252D", borderRadius: "25px 25px 0 0" }}>
      <StyledDisplay>
        {/* Top part */}
        <DisplayTopBar />
        <ColorThemePicker />
        {/* Bottom part */}
        <StyledIndicatorList>
          <StyledExpression>{props.expression}</StyledExpression>
        </StyledIndicatorList>
        <StyledScreen>{props.value}</StyledScreen>
      </StyledDisplay>
    </div>
  );
};

export default Display;
