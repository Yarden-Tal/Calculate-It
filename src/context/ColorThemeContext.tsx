import { ReactJSXElementChildrenAttribute } from "@emotion/react/types/jsx-namespace";
import { useState, createContext } from "react";
import { ColorThemeContextProps } from "../ts/interfaces";
// Services
// TS

const defaultValue = {
  isDarkMode: false,
  handleToggle: () => {},
};

export const ColorThemeContext =
  createContext<ColorThemeContextProps>(defaultValue);

export const ColorThemeContextProvider = ({
  children,
}: ReactJSXElementChildrenAttribute) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const handleToggle = (): void => setIsDarkMode(!isDarkMode);
  return (
    <ColorThemeContext.Provider value={{ handleToggle, isDarkMode }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
