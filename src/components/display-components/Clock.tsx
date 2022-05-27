import { useState, useEffect } from "react";
import { format } from "date-fns";
import StyledClock from "../../styles/StyledClock";

const Clock = (): JSX.Element => {
  const [time, setTime] = useState<Date>(new Date());
  const formattedTime: string = format(time, "p").replace(" PM", "");
  const refreshClock = (): void => setTime(new Date());

  useEffect(() => {
    const timerId: NodeJS.Timer = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return <StyledClock>{formattedTime}</StyledClock>;
};

export default Clock;
