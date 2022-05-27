import * as React from "react";
import { useState, createContext, ReactNode } from "react";
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
}: {
  children: ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const handleToggle = (): void => {
    setIsDarkMode(!isDarkMode);
  };
  console.log(isDarkMode);

  return (
    <ColorThemeContext.Provider value={{ handleToggle, isDarkMode }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
