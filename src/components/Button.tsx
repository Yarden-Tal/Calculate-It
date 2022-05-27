// Styles
import { StyledButton } from "../styles/StyledButton";
// TS
import { ButtonProps } from "../ts/interfaces";

export const Button = ({ children, color, isLarge, onClick }: ButtonProps) => {
  return (
    <StyledButton {...{ color, isLarge, onClick }}>{children}</StyledButton>
  );
};

export default Button;
