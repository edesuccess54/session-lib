// Type representing the return value of generateKeys function
type GeneratedKeys = {
  baseKey: string;
  suffixKey: string;
};

function GenerateRandomAlphabet(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

function GenerateRandomNumber(): string {
  return String(Math.floor(Math.random() * 10));
}

function GenerateRandomSpecialChar(excludeDash: boolean = true): string {
  const specialChars = excludeDash
    ? "!@#$%^&*()_=+[]{};:'\",.<>/?`~"
    : "!@#$%^&*()-_=+[]{};:'\",.<>/?`~";
  return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

function GenerateCharFromFormat(char: string): string {
  if (char === "-") {
    return "-";
  } else if (/[a-zA-Z]/.test(char)) {
    return GenerateRandomAlphabet();
  } else if (/[0-9]/.test(char)) {
    return GenerateRandomNumber();
  } else {
    return GenerateRandomSpecialChar(false);
  }
}

export function GenerateRandomKey(): GeneratedKeys {
  const baseKeyFormat = "3Hd48?-J8L3^y-&Hw82n-";
  const suffixKeyFormat = "-&9Ia34-m2%O1B-Y0c@p8";

  let baseKey = "";
  let suffixKey = "";

  // Generate baseKey
  for (let i = 0; i < baseKeyFormat.length; i++) {
    baseKey += GenerateCharFromFormat(baseKeyFormat[i]);
  }

  // Generate suffixKey
  for (let i = 0; i < suffixKeyFormat.length; i++) {
    suffixKey += GenerateCharFromFormat(suffixKeyFormat[i]);
  }

  return { baseKey, suffixKey };
}
