import { useEffect, useState } from "react";
// Styles
import StyledApp from "./styles/StyledApp";
// Components
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
// TS
import { OperatorEnum } from "./ts/enums";
import { DigitType } from "./ts/types";
// Helpers
import { formatDisplay } from "./helpers/helpers";
import Alert from "./components/Alert";

export const App = (): JSX.Element => {
  const [result, setResult] = useState<number>(0);
  const [isWaitingForOperand, setIsWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<OperatorEnum>();
  const [display, setDisplay] = useState<string>("0");
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

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
        if (rightOperand === 0) {
          setIsAlertOpen(true);
          setDisplay("0");
          setResult(0);
          setPendingOperator(undefined);
          setTimeout(() => {
            setIsAlertOpen(false);
          }, 4000);
          return false;
        }
        newResult /= rightOperand;
    }
    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));
    return true;
  };

  const onDigitButtonClick = (digit: DigitType): void => {
    let newDisplay = display;
    if ((display === "0" && digit === 0) || display.length > 12) return;
    if (isWaitingForOperand) {
      newDisplay = "";
      setIsWaitingForOperand(false);
    }
    if (display !== "0") newDisplay = newDisplay + digit.toString();
    else newDisplay = digit.toString();
    setDisplay(newDisplay);
  };

  const onPrecentButtonClick = (): void => {
    const perCent = String((result * Number(display)) / 100);
    setDisplay(perCent);
  };

  const onPointButtonClick = (): void => {
    let newDisplay = display;
    if (isWaitingForOperand) newDisplay = "0";
    if (newDisplay.indexOf(".") === -1) newDisplay = `${newDisplay}.`;
    setDisplay(newDisplay);
    setIsWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: OperatorEnum): void => {
    const operand = Number(display);
    if (typeof pendingOperator !== "undefined" && !isWaitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
    } else setResult(operand);
    setPendingOperator(operator);
    setIsWaitingForOperand(true);
  };

  const onChangeSignButtonClick = (): void => {
    const value = Number(display);
    if (value > 0) {
      setDisplay(`-${display}`);
    } else if (value < 0) setDisplay(display.slice(1));
  };

  const onEqualButtonClick = (): void => {
    const operand = Number(display);
    if (typeof pendingOperator !== "undefined" && !isWaitingForOperand) {
      if (!calculate(operand, pendingOperator)) return;
      setPendingOperator(undefined);
    } else setDisplay(operand.toString());
    setResult(operand);
    setIsWaitingForOperand(true);
  };

  const onAllClearButtonClick = (): void => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setIsWaitingForOperand(true);
  };

  const onClearEntryButtonClick = (): void => {
    setDisplay("0");
    setIsWaitingForOperand(true);
  };

  return (
    <StyledApp>
      <Display
        value={formatDisplay(display)}
        expression={
          typeof pendingOperator !== "undefined"
            ? `${formatDisplay(String(result))} ${pendingOperator} ${
                isWaitingForOperand ? "" : formatDisplay(display)
              }`
            : ""
        }
      />
      {isAlertOpen && <Alert />}
      <Keyboard
        {...{
          onDigitButtonClick,
          onPointButtonClick,
          onOperatorButtonClick,
          onChangeSignButtonClick,
          onEqualButtonClick,
          onAllClearButtonClick,
          onClearEntryButtonClick,
          onPrecentButtonClick,
        }}
      />
    </StyledApp>
  );
};

export default App;
