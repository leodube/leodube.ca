import { graphql } from "@graphql-ts/schema";
import { list } from "@keystone-6/core";
import { text, select } from "@keystone-6/core/fields";
import { virtual } from "@keystone-6/core/fields";

export const skill = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: "Programming Language", value: "programmingLanguage" },
        { label: "Framework", value: "framework" },
        { label: "Tool", value: "tool" },
      ],
      validation: { isRequired: true },
      defaultValue: "programmingLanguage",
      ui: { displayMode: "segmented-control" },
    }),
    level: select({
      options: [
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
      ],
      validation: { isRequired: true },
      defaultValue: "weekly",
      ui: { displayMode: "segmented-control" },
    }),
    label: virtual({
      field: graphql.field({
        type: graphql.String,
        async resolve(item) {
          const { name, level } = item as any;
          return name.concat(" ", level);
        },
      }),
    }),
  },
  ui: {
    hideCreate: true,
    description: "Skills Descriptions",
    listView: {
      initialColumns: ["name", "level", "type"],
    },
  },
});
