// Style
import { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContext";
import StyledDisplayTopBar from "../../styles/StyledDisplayTopBar";
import { ColorThemeContextProps } from "../../ts/interfaces";
// Components
import Clock from "./Clock";
import Svgs from "./Svgs";

const DisplayTopBar = (): JSX.Element => {
  const { isDarkMode } = useContext<ColorThemeContextProps>(ColorThemeContext);

  return (
    <StyledDisplayTopBar isDark={isDarkMode}>
      <Clock />
      <Svgs />
    </StyledDisplayTopBar>
  );
};

export default DisplayTopBar;
