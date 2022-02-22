import React, { useEffect } from "react";
// Components
import Button from "./Button";
// Styles
import StyledKeyboard from "../styles/StyledKeyboard";
// TS
import { IKeyboardProps } from "../ts/interfaces";
import { DigitType } from "../ts/types";
import { ColorsEnum, OperatorEnum } from "../ts/enums";

const Keyboard = (props: IKeyboardProps): JSX.Element => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      props.onDigitButtonClick((keyCode - 48) as DigitType);
    } else if (keyCode >= 96 && keyCode <= 105) {
      props.onDigitButtonClick((keyCode - 96) as DigitType);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      props.onOperatorButtonClick(OperatorEnum.ADD);
    } else if (keyCode === 109 || keyCode === 189) {
      props.onOperatorButtonClick(OperatorEnum.SUBTRACT);
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      props.onOperatorButtonClick(OperatorEnum.MULTIPLY);
    } else if (keyCode === 111 || keyCode === 191) {
      props.onOperatorButtonClick(OperatorEnum.DIVIDE);
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      props.onEqualButtonClick();
    } else if (keyCode === 46) {
      props.onClearEntryButtonClick();
    } else if (keyCode === 27) {
      props.onAllClearButtonClick();
    } else if (keyCode === 78) {
      props.onChangeSignButtonClick();
    } else if (keyCode === 80) {
      props.onMemoryPlusButtonClick();
    } else if (keyCode === 81) {
      props.onMemoryMinusButtonClick();
    } else if (keyCode === 82) {
      props.onMemoryRecallButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <StyledKeyboard>
      <Button onClick={props.onMemoryRecallButtonClick}>MR</Button>
      <Button onClick={props.onMemoryClearButtonClick}>MC</Button>
      <Button onClick={props.onMemoryPlusButtonClick}>M+</Button>
      <Button onClick={props.onMemoryMinusButtonClick}>M-</Button>
      <Button color={ColorsEnum.RED} onClick={props.onAllClearButtonClick}>
        AC
      </Button>
      <Button onClick={props.onClearEntryButtonClick}>C</Button>
      <Button onClick={props.onChangeSignButtonClick}>-/+</Button>
      <Button
        color={ColorsEnum.DARK}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.DIVIDE)}
      >
        ÷
      </Button>
      <Button onClick={() => props.onDigitButtonClick(7)}>7</Button>
      <Button onClick={() => props.onDigitButtonClick(8)}>8</Button>
      <Button onClick={() => props.onDigitButtonClick(9)}>9</Button>
      <Button
        color={ColorsEnum.DARK}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.MULTIPLY)}
      >
        x
      </Button>
      <Button onClick={() => props.onDigitButtonClick(4)}>4</Button>
      <Button onClick={() => props.onDigitButtonClick(5)}>5</Button>
      <Button onClick={() => props.onDigitButtonClick(6)}>6</Button>
      <Button
        color={ColorsEnum.DARK}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.SUBTRACT)}
      >
        -
      </Button>
      <Button onClick={() => props.onDigitButtonClick(1)}>1</Button>
      <Button onClick={() => props.onDigitButtonClick(2)}>2</Button>
      <Button onClick={() => props.onDigitButtonClick(3)}>3</Button>
      <Button
        color={ColorsEnum.DARK}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.ADD)}
      >
        +
      </Button>
      <Button onClick={() => props.onDigitButtonClick(0)}>0</Button>
      <Button onClick={props.onPointButtonClick}>.</Button>
      <Button
        color={ColorsEnum.GREEN}
        isLarge={true}
        onClick={props.onEqualButtonClick}
      >
        =
      </Button>
    </StyledKeyboard>
  );
};

export default Keyboard;
