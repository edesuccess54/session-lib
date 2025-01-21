export function GetOrdinalWord(n: number): string {
  const basic = [
    "Zero",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelfth",
    "Thirteenth",
    "Fourteenth",
    "Fifteenth",
    "Sixteenth",
    "Seventeenth",
    "Eighteenth",
    "Nineteenth",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (n < 20) {
    return basic[n];
  }

  const lastTwoDigits = n % 100;
  if (lastTwoDigits < 20) {
    return basic[lastTwoDigits];
  }

  const lastDigit = n % 10;
  const tenPlace = Math.floor(n / 10) % 10;
  const hundredPlace = Math.floor(n / 100);

  let words = hundredPlace > 0 ? basic[hundredPlace] + " Hundred " : "";
  words += tenPlace > 0 ? tens[tenPlace] : "";

  if (lastDigit > 0) {
    words +=
      tenPlace > 1 ? "-" + basic[lastDigit].toLowerCase() : basic[lastDigit];
  } else {
    if (tenPlace === 2) {
      words = "Twentieth";
    } else {
      words += "ieth";
    }
  }

  return words;
}
