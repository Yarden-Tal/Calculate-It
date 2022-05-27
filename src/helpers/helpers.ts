export const formatDisplay = (display: string): string => {
  const output: string = Number(display)
    .toLocaleString()
    .replace("∞", "Invalid");
  return output;
};

export const calcPrecent = (result: number, display: string): string => {
  const perCent: string = String((result * Number(display)) / 100);
  return perCent;
};
