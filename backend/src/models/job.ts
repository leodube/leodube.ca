import { list } from "@keystone-6/core";
import { text, select, checkbox, timestamp } from "@keystone-6/core/fields";

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
      defaultValue: "draft",
      ui: { displayMode: "segmented-control" },
    }),
    contract: checkbox({ defaultValue: false }),
    startDate: timestamp(),
    endDate: timestamp(),
    isCurrent: checkbox({ defaultValue: false }),
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
