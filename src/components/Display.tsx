import { useContext, useState } from "react";
import { ColorThemeContext } from "../context/ColorThemeContext";
import { themes } from "../context/themes";
// Styles
import StyledDisplay, {
  StyledIndicatorList,
  StyledExpression,
  StyledScreen,
} from "../styles/StyledDisplay";
// TS
import { DarkThemeEnum } from "../ts/enums";
import {
  ColorThemeContextProps,
  DisplayProps,
  KeyboardProps,
} from "../ts/interfaces";
// Components
import ColorThemePicker from "./display-components/ColorThemePicker";
import DisplayTopBar from "./display-components/DisplayTopBar";

export const Display = (props: DisplayProps) => {
  const { isDarkMode } = useContext<ColorThemeContextProps>(ColorThemeContext);

  // const [operator, setOperator] = useState<OperatorEnum>()
  // const separateOperator = (expression: string) => {
  //   for (const letter of props.expression) {
  //     if (
  //       letter === OperatorEnum.ADD ||
  //       letter === OperatorEnum.SUBTRACT ||
  //       OperatorEnum.MULTIPLY ||
  //       letter === OperatorEnum.DIVIDE
  //     ) {
  //     }
  //   }
  // };

  return (
    <div
      style={{
        backgroundColor: `${
          isDarkMode
            ? themes.darkMode.displayBackgroundColor
            : themes.lightMode.displayBackgroundColor
        }`,
        borderRadius: "25px 25px 0 0",
      }}
    >
      <StyledDisplay isDark={isDarkMode}>
        {/* Top part */}
        <DisplayTopBar />
        <ColorThemePicker />
        {/* Bottom part */}
        <StyledIndicatorList isDark={isDarkMode}>
          <StyledExpression>{props.expression}</StyledExpression>
        </StyledIndicatorList>
        <StyledScreen isDark={isDarkMode}>{props.value}</StyledScreen>
      </StyledDisplay>
    </div>
  );
};

export default Display;
