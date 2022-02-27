// Styles
import { StyledButton } from "../styles/StyledButton";
// TS
import { IButtonProps } from "../ts/interfaces";

export const Button = ({ children, color, isLarge, onClick }: IButtonProps) => {
  return (
    <StyledButton {...{ color, isLarge, onClick }}>{children}</StyledButton>
  );
};

export default Button;
