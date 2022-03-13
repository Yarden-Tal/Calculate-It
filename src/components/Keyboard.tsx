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
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey)
      props.onDigitButtonClick((keyCode - 48) as DigitType);
    else if (keyCode >= 96 && keyCode <= 105)
      props.onDigitButtonClick((keyCode - 96) as DigitType);
    else if (keyCode === 107 || (keyCode === 187 && shiftKey))
      props.onOperatorButtonClick(OperatorEnum.ADD);
    else if (keyCode === 109 || keyCode === 189)
      props.onOperatorButtonClick(OperatorEnum.SUBTRACT);
    else if (keyCode === 106 || (keyCode === 56 && shiftKey))
      props.onOperatorButtonClick(OperatorEnum.MULTIPLY);
    else if (keyCode === 111 || keyCode === 191)
      props.onOperatorButtonClick(OperatorEnum.DIVIDE);
    else if (keyCode === 13 || (keyCode === 187 && !shiftKey))
      props.onEqualButtonClick();
    else if (keyCode === 46) props.onClearEntryButtonClick();
    else if (keyCode === 27) props.onAllClearButtonClick();
    else if (keyCode === 78) props.onChangeSignButtonClick();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <StyledKeyboard>
      <Button color={ColorsEnum.GREEN} onClick={props.onAllClearButtonClick}>
        AC
      </Button>
      <Button color={ColorsEnum.GREEN} onClick={props.onChangeSignButtonClick}>
        <span>⁺</span>
        <span>/</span>
        <span>₋</span>
      </Button>
      <Button color={ColorsEnum.GREEN} onClick={props.onPrecentButtonClick}>
        %
      </Button>
      <Button
        color={ColorsEnum.RED}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.DIVIDE)}
      >
        ÷
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(7)}
      >
        7
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(8)}
      >
        8
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(9)}
      >
        9
      </Button>
      <Button
        color={ColorsEnum.RED}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.MULTIPLY)}
      >
        x
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(4)}
      >
        4
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(5)}
      >
        5
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(6)}
      >
        6
      </Button>
      <Button
        color={ColorsEnum.RED}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.SUBTRACT)}
      >
        -
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(1)}
      >
        1
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(2)}
      >
        2
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(3)}
      >
        3
      </Button>
      <Button
        color={ColorsEnum.RED}
        onClick={() => props.onOperatorButtonClick(OperatorEnum.ADD)}
      >
        +
      </Button>
      <Button color={ColorsEnum.WHITE} onClick={props.onClearEntryButtonClick}>
        ↻
      </Button>
      <Button
        color={ColorsEnum.WHITE}
        onClick={() => props.onDigitButtonClick(0)}
      >
        0
      </Button>
      <Button color={ColorsEnum.WHITE} onClick={props.onPointButtonClick}>
        .
      </Button>
      <Button color={ColorsEnum.RED} onClick={props.onEqualButtonClick}>
        =
      </Button>
    </StyledKeyboard>
  );
};

export default Keyboard;
