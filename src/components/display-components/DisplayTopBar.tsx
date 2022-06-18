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
      <div style={{ color: "grey" }}>
        by&nbsp;
        <a
          style={{ color: "#26bba2", textDecoration: "none" }}
          href="https://www.linkedin.com/in/yarden-tal-245095112"
          target={"_blank"}
        >
          Yarden Tal
        </a>
      </div>
      <Svgs />
    </StyledDisplayTopBar>
  );
};

export default DisplayTopBar;
