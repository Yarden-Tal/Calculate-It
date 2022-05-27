// Styles
import { useContext } from "react";
import { ColorThemeContext } from "../context/ColorThemeContext";
import { StyledButton } from "../styles/StyledButton";
// TS
import { ButtonProps, ColorThemeContextProps } from "../ts/interfaces";

export const Button = ({ children, color, isLarge, onClick }: ButtonProps) => {
  const { isDarkMode } = useContext<ColorThemeContextProps>(ColorThemeContext);
  return (
    <StyledButton
      color={color}
      isLarge={isLarge}
      onClick={onClick}
      isDark={isDarkMode}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
