import { list } from "@keystone-6/core";
import { document } from "@keystone-6/fields-document";
import { text, select, relationship } from "@keystone-6/core/fields";

export const page = list({
  fields: {
    page: text({ validation: { isRequired: true } }),
    status: select({
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "draft",
      ui: { displayMode: "segmented-control" },
    }),
    image: relationship({ ref: "Image", many: true }),
    content: document({
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
      relationships: {
        project: {
          kind: "inline",
          listKey: "Project",
          label: "project",
          selection: "title subtitle",
        },
        job: {
          kind: "inline",
          listKey: "Job",
          label: "job",
          selection: "id company position",
        },
      },
    }),
    seo: relationship({ ref: "Seo" }),
  },
  ui: {
    labelField: "page",
    description: "Handle generic information for each page.",
    listView: {
      initialColumns: ["page", "status"],
    },
  },
});
