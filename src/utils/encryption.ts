const algorithm = "AES-GCM";
const enc = new TextEncoder();
const dec = new TextDecoder();

// Run the below code to get encryption key
// node -e "console.log(require('crypto').randomBytes(32).toString('base64'));"

// Use a predefined key (e.g., from an environment variable or hardcoded for now)

// const base64Key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY!;
const base64Key =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_ENCRYPTION_KEY!) ||
  "";
const ivLength = 12; // AES-GCM standard IV length (12 bytes)

// Helper to derive the encryption key
async function getKey() {
  const keyBuffer = Buffer.from(base64Key, "base64");
  return await crypto.subtle.importKey(
    "raw",
    keyBuffer,
    {
      name: algorithm,
      length: 256,
    },
    false, // Non-extractable
    ["encrypt", "decrypt"]
  );
}

// Encrypt function using Web Crypto API
export async function encrypt(value: string): Promise<string> {
  const key = await getKey();
  const iv = crypto.getRandomValues(new Uint8Array(ivLength));
  const encrypted = await crypto.subtle.encrypt(
    {
      name: algorithm,
      iv: iv,
    },
    key,
    enc.encode(value)
  );

  // Combine IV and encrypted value as base64 for storage
  const ivBase64 = Buffer.from(iv).toString("base64");
  const encryptedBase64 = Buffer.from(encrypted).toString("base64");

  return `${ivBase64}:${encryptedBase64}`;
}

// Decrypt function using Web Crypto API
export async function decrypt(encryptedValue: string): Promise<string> {
  const [ivBase64, encryptedBase64] = encryptedValue.split(":");

  const key = await getKey();

  const iv = Buffer.from(ivBase64, "base64");
  const encrypted = Buffer.from(encryptedBase64, "base64");

  try {
    const decrypted = await crypto.subtle.decrypt(
      {
        name: algorithm,
        iv: iv,
      },
      key,
      encrypted
    );

    return dec.decode(decrypted);
  } catch (error) {
    console.error("Decryption failed:", error);
    throw new Error("Decryption failed");
  }
}

// Encode values
export function obfuscateValues(value: string): string {
  const base64Encoded = Buffer.from(value).toString("base64");

  // Then, convert the base64 string to hex to further increase length
  const hexEncoded = Buffer.from(base64Encoded).toString("hex");

  // Optionally, add random characters to make the string even longer
  const randomChars = Math.random().toString(36).substring(2, 10);

  return `${hexEncoded}${randomChars}`;
}

// Decode values
export function deobfuscateValues(obfuscatedValue: string): string {
  // return Buffer.from(obfuscatedValue, 'base64').toString('utf8');

  // Remove the last 8 random characters
  const hexEncoded = obfuscatedValue.slice(0, -8);

  // Decode the hex string back to base64
  const base64Encoded = Buffer.from(hexEncoded, "hex").toString();

  // Decode the base64 string back to the original value
  return Buffer.from(base64Encoded, "base64").toString("utf8");
}
