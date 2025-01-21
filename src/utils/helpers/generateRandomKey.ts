// Type representing the return value of generateKeys function
type GeneratedKeys = {
  baseKey: string;
  suffixKey: string;
};

function generateRandomAlphabet(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

function generateRandomNumber(): string {
  return String(Math.floor(Math.random() * 10));
}

function generateRandomSpecialChar(excludeDash: boolean = true): string {
  const specialChars = excludeDash
    ? '!@#$%^&*()_=+[]{};:\'",.<>/?`~'
    : '!@#$%^&*()-_=+[]{};:\'",.<>/?`~';
  return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

function generateCharFromFormat(char: string): string {
  if (char === '-') {
    return '-';
  } else if (/[a-zA-Z]/.test(char)) {
    return generateRandomAlphabet();
  } else if (/[0-9]/.test(char)) {
    return generateRandomNumber();
  } else {
    return generateRandomSpecialChar(false);
  }
}

export function generateRandomKey(): GeneratedKeys {
  const baseKeyFormat = '3Hd48?-J8L3^y-&Hw82n-';
  const suffixKeyFormat = '-&9Ia34-m2%O1B-Y0c@p8';

  let baseKey = '';
  let suffixKey = '';

  // Generate baseKey
  for (let i = 0; i < baseKeyFormat.length; i++) {
    baseKey += generateCharFromFormat(baseKeyFormat[i]);
  }

  // Generate suffixKey
  for (let i = 0; i < suffixKeyFormat.length; i++) {
    suffixKey += generateCharFromFormat(suffixKeyFormat[i]);
  }

  return { baseKey, suffixKey };
}
