import { list } from "@keystone-6/core";
import {
  text,
  select,
  checkbox,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";

export const job = list({
  fields: {
    company: text({ validation: { isRequired: true } }),
    position: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: "Full-Time", value: "fullTime" },
        { label: "Part-Time", value: "partTime" },
        { label: "Internship", value: "internship" },
      ],
      defaultValue: "fullTime",
      ui: { displayMode: "segmented-control" },
    }),
    contract: checkbox({ defaultValue: false }),
    startDate: timestamp(),
    endDate: timestamp(),
    isCurrent: checkbox({ defaultValue: false }),
    skills: relationship({
      ref: "Skill.job",
      many: true,
      ui: {
        hideCreate: true,
        displayMode: "select",
        createView: {
          fieldMode: ({ session, context }) => "hidden",
        },
        itemView: {
          fieldMode: ({ session, context, item }) => "read",
        },
        listView: {
          fieldMode: ({ session, context }) => "read",
        },
      },
    }),
    description: text(),
  },
  ui: {
    labelField: "company",
    description: "Work experience.",
    listView: {
      initialColumns: ["company", "position", "type"],
    },
  },
});
