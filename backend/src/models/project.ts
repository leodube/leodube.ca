import { list } from "@keystone-6/core";
import { text, select } from "@keystone-6/core/fields";

export const project = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text(),
    description: text({
      validation: { isRequired: true },
      ui: { displayMode: "textarea" },
    }),
    type: select({
      options: [
        { label: "Personal", value: "personal" },
        { label: "Professional", value: "professional" },
      ],
      defaultValue: "personal",
      ui: { displayMode: "segmented-control" },
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
