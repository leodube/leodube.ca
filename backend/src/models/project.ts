import { list } from "@keystone-6/core";
import { text, select, relationship } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import "dotenv/config";

export const project = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text(),
    type: select({
      options: [
        { label: "Personal", value: "personal" },
        { label: "Professional", value: "professional" },
      ],
      defaultValue: "personal",
      ui: { displayMode: "segmented-control" },
    }),
    image: relationship({ ref: "Image", many: true }),
    description: document({
      formatting: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      dividers: true,
    }),
  },
  ui: {
    labelField: "title",
    description: "Projects worked on.",
    listView: {
      initialColumns: ["title", "subtitle", "type"],
    },
  },
});
