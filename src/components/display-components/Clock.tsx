import { useState, useEffect, useContext } from "react";
import { format } from "date-fns";
import StyledClock from "../../styles/StyledClock";
import { ColorThemeContext } from "../../context/ColorThemeContext";
import { ColorThemeContextProps } from "../../ts/interfaces";

const Clock = (): JSX.Element => {
  const { isDarkMode } = useContext<ColorThemeContextProps>(ColorThemeContext);
  const [time, setTime] = useState<Date>(new Date());
  const formattedTime: string = format(time, "p").replace(" PM", "");
  const refreshClock = (): void => setTime(new Date());

  useEffect(() => {
    const timerId: NodeJS.Timer = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return <StyledClock isDark={isDarkMode}>{formattedTime}</StyledClock>;
};

export default Clock;
