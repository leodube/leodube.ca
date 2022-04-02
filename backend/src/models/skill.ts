import { list } from "@keystone-6/core";
import { text, select, relationship } from "@keystone-6/core/fields";

export const skill = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: "Programming Language", value: "programmingLanguage" },
        { label: "Framework", value: "framework" },
        { label: "Tool", value: "tool" },
      ],
      defaultValue: "programmingLanguage",
      ui: { displayMode: "segmented-control" },
    }),
    job: relationship({
      ref: "Job.skills",
    }),
  },
  ui: {
    labelField: "name",
    description: "Skills Descriptions",
    listView: {
      initialColumns: ["name", "job", "type"],
    },
  },
});
