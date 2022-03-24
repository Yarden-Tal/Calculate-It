// TS
import React, { ReactNode } from "react";
import { ColorsEnum, OperatorEnum } from "./enums";
import { DigitType } from "./types";

export interface IKeyboardProps {
  onDigitButtonClick: (digit: DigitType) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: OperatorEnum) => void;
  onChangeSignButtonClick: () => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onPrecentButtonClick: () => void;
}

export interface IDisplayProps {
  expression: string;
  value: string;
}

export interface IButtonProps {
  color?: ColorsEnum;
  isLarge?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
