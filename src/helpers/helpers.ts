export const formatDisplay = (display: string) => {
  const output = Number(display).toLocaleString().replace("∞", "Invalid");
  return output;
};

export const calcPrecent = (result: number, display: string) => {
  const perCent = String((result * Number(display)) / 100);
  return perCent;
};
