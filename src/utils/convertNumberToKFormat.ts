export const convertNumberToKFormat = (number: number): string | number => {
  const k = 1000;

  // Check if the absolute value of the number is greater than or equal to 1000
  const converted =
    Math.abs(number) >= k ? (number / k).toFixed(1) + "k" : number;

  return converted;
};
