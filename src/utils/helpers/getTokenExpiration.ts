import { Buffer } from 'buffer'; // Make sure to import Buffer if it's not globally available

// Type representing the return value of formatTokenExpiration function
type TokenExpiration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Helper function to decode a JWT and get its expiration time in seconds
export function getTokenExpiration(token: string): number {
  if (!token) {
    return 0;
  }

  const base64Url = token.split('.')[1]; // Get the payload part of the token
  if (!base64Url) return 0; // Ensure there's a payload part to decode

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(Buffer.from(base64, 'base64').toString());

  const exp = payload.exp; // Expiration time in Unix timestamp (seconds)
  const now = Math.floor(Date.now() / 1000); // Current time in Unix timestamp (seconds)

  return exp - now; // Return time until expiration in seconds
}

// Helper function to convert seconds into days, hours, minutes, and seconds
export function formatTokenExpiration(seconds: number): TokenExpiration {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return { days, hours, minutes, seconds };
}
