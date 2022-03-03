import { createAuth } from "@keystone-6/auth";

// Configure authentication
export const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});
