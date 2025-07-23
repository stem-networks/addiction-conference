// src/lib/getBaseUrl.ts

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Always use relative on client
    return "";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  return "http://localhost:3000";
}
