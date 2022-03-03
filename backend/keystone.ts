import { config } from "@keystone-6/core";
import { statelessSessions } from "@keystone-6/core/session";
import { lists } from "./src/schema";
import { withAuth } from "./src/auth";
import {
  PORT,
  DATABASE_URL,
  SESSION_MAX_AGE,
  SESSION_SECRET,
} from "./src/config";

// Configure session
const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET,
});

// Configure Keystone
export default withAuth(
  config({
    db: {
      provider: "postgresql",
      useMigrations: true,
      url: DATABASE_URL,
    },
    server: { port: PORT },
    lists,
    session,
  })
);
