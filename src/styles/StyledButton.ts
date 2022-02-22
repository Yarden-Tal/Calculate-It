import styled, { css } from "styled-components";
import { ColorsEnum } from "../ts/enums";
// TS
import { IButtonProps } from "../ts/interfaces";

const colorToCss = (color: IButtonProps["color"]) => {
  switch (color) {
    case ColorsEnum.RED:
      return css`
        background-color: #c04444;
        color: #fff;
        &:hover,
        &:focus {
          background-color: #af3b3b;
        }
      `;
    case ColorsEnum.GREEN:
      return css`
        background-color: #018645;
        color: #fff;
        &:hover,
        &:focus {
          background-color: #016d38;
        }
      `;
    case ColorsEnum.DARK:
      return css`
        background-color: #272727;
        color: #c5830d;
        &:hover,
        &:focus {
          background-color: #1a1a1a;
        }
      `;
  }

  return css`
    background-color: #2e2e2e;
    color: #fff;
    &:hover,
    &:focus {
      background-color: #212121;
    }
  `;
};

export const StyledButton = styled.button<IButtonProps>`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}
position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:focus {
    outline: 0;
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }
  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;
