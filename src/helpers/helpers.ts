export const formatDisplay = (display: string) => {
  let splitDisplay: string[] = display.split("");
  let output: string = "";
  let isFirst: boolean = true;
  for (let digit = splitDisplay.length - 1; digit >= 0; digit--) {
    if ((splitDisplay.length - digit - 1) % 3 === 0) {
      if (isFirst) isFirst = false;
      else output = `,${output}`;
    }
    output = splitDisplay[digit] + output;
  }
  removeExessComma(output);
  return output;
};

const removeExessComma = (output: string) => {
  let updatedOutput;
  if (output[0] === "-" && output[1] === ",")
    updatedOutput = output.replace(",", "");
  return updatedOutput;
};
