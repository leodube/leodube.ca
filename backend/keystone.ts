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
import "dotenv/config";

// Configure session
const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET,
});

// Configure Keystone
export default config(
  withAuth({
    db: {
      provider: "postgresql",
      useMigrations: true,
      enableLogging: false,
      url: DATABASE_URL,
    },
    server: { port: PORT },
    lists,
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    graphql: {
      debug: process.env.NODE_ENV !== "production",
      queryLimits: { maxTotalResults: 100 },
      path: "/api/graphql",
      playground: true,
      apolloConfig: {
        introspection: true,
      },
    },
  })
);
