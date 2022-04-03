import { list } from "@keystone-6/core";
import {
  text,
  select,
  checkbox,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

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
      ref: "Skill",
      many: true,
      ui: {
        displayMode: "select",
        labelField: "label",
      },
    }),
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
    labelField: "company",
    description: "Work experience.",
    listView: {
      initialColumns: ["company", "position", "type"],
    },
  },
});
