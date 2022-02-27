import { useState } from "react";
// Styles
import StyledApp from "./styles/StyledApp";
// Components
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
// TS
import { OperatorEnum } from "./ts/enums";
import { DigitType } from "./ts/types";

export const App = (): JSX.Element => {
  const [memory, setMemory] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<OperatorEnum>();
  const [display, setDisplay] = useState<string>("0");

  const calculate = (
    rightOperand: number,
    pendingOperator: OperatorEnum
  ): boolean => {
    let newResult = result;
    switch (pendingOperator) {
      case OperatorEnum.ADD:
        newResult += rightOperand;
        break;
      case OperatorEnum.SUBTRACT:
        newResult -= rightOperand;
        break;
      case OperatorEnum.MULTIPLY:
        newResult *= rightOperand;
        break;
      case OperatorEnum.DIVIDE:
        if (rightOperand === 0) return false;
        newResult /= rightOperand;
    }
    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));
    return true;
  };

  const onDigitButtonClick = (digit: DigitType) => {
    let newDisplay = display;
    if ((display === "0" && digit === 0) || display.length > 12) return;
    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }
    if (display !== "0") newDisplay = newDisplay + digit.toString();
    else newDisplay = digit.toString();
    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;
    if (waitingForOperand) newDisplay = "0";
    if (newDisplay.indexOf(".") === -1) newDisplay = newDisplay + ".";
    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: OperatorEnum) => {
    const operand = Number(display);
    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
    } else setResult(operand);
    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);
    if (value > 0) setDisplay("-" + display);
    else if (value < 0) setDisplay(display.slice(1));
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);
    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
      setPendingOperator(undefined);
    } else setDisplay(operand.toString());
    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setMemory(0);
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  };

  return (
    <StyledApp>
      <Display
        value={display}
        hasMemory={memory !== 0}
        expression={
          typeof pendingOperator !== "undefined"
            ? `${result} ${pendingOperator} ${waitingForOperand ? "" : display}`
            : ""
        }
      />
      <Keyboard
        {...{
          onDigitButtonClick,
          onPointButtonClick,
          onOperatorButtonClick,
          onChangeSignButtonClick,
          onEqualButtonClick,
          onAllClearButtonClick,
          onClearEntryButtonClick,
        }}
      />
    </StyledApp>
  );
};

export default App;
