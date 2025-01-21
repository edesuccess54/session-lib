export function truncateToTwoDecimals(number: number): number {
  // Check if the number is an integer (no decimals), return as is if true
  if (Number.isInteger(number)) {
    return number;
  }
  // Otherwise, truncate to two decimal places
  return Math.floor(number * 100) / 100;
}

export const formatNumberWithCommas = (number: number | undefined): string => {
  if (!number || typeof number === "string") return "0.00";

  // Ensure the number is formatted to two decimal places
  const fixedNumber = truncateToTwoDecimals(Number(number));

  // Convert the number to a string for easier manipulation
  const parts = String(fixedNumber).split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "00"; // Handle cases where there is no decimal part

  // Insert commas at the appropriate positions in the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Reassemble the parts including decimal places, ensuring two decimal digits
  const formattedNumber = `${formattedInteger}.${decimalPart.padEnd(2, "0")}`;

  // Return the formatted number, ensuring negative sign is managed
  return number < 0 && !formattedNumber.startsWith("-")
    ? `-${formattedNumber}`
    : formattedNumber;
};
