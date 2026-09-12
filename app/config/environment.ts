/**
 * Central place for runtime-configurable values.
 * Extend as needed (e.g. TOKENS, FEATURE FLAGS).
 */
const environment = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  isDev: process.env.NODE_ENV !== "production",
  logLevel: process.env.NODE_ENV === "production" ? "warn" : "debug",
};

export default environment;
