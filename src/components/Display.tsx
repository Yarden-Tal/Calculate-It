// Styles
import StyledDisplay, {
  StyledIndicatorList,
  StyledExpression,
  StyledScreen,
} from "../styles/StyledDisplay";
import { OperatorEnum } from "../ts/enums";
// TS
import { IDisplayProps } from "../ts/interfaces";

export const Display = (props: IDisplayProps) => {
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
    <>
      <StyledDisplay>
        <StyledIndicatorList>
          <StyledExpression>{props.expression}</StyledExpression>
        </StyledIndicatorList>
        <StyledScreen>{props.value}</StyledScreen>
      </StyledDisplay>
    </>
  );
};

export default Display;
