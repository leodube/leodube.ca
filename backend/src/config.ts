// Set port, default to 3000
export const PORT = parseInt(process.env.PORT) || 3000;

// Postgres DB URL
export const DATABASE_URL =
  process.env.DATABASE_URL ||
  `postgres://${process.env.USER}@localhost/leodube.ca`;

// Set session max age, default to 30 days
export const SESSION_MAX_AGE =
  parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;

// Set session secret, default to secure random string
export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require("crypto")
    .randomBytes(32)
    .toString("base64")
    .replace(/[^a-zA-Z0-9]+/g, "");
