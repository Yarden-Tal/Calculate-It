export const formatDisplay = (display: string): string => {
  let splitDisplay: string[] = display.split("");
  let output: string = "";
  let first: boolean = true;
  for (let i = splitDisplay.length - 1; i >= 0; i--) {
    if ((splitDisplay.length - i - 1) % 3 === 0) {
      if (first) first = false;
      else output = `,${output}`;
    }
    output = splitDisplay[i] + output;
  }
  return output;
};
