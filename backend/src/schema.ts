import { list } from "@keystone-6/core";
import { password, text } from "@keystone-6/core/fields";

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
};
