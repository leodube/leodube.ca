import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const seo = list({
  fields: {
    page: text({ validation: { isRequired: true } }),
    metaTitle: text(),
    metDescription: text(),
  },
  ui: {
    labelField: "page",
    description: "Set the SEO attributes for a given page.",
  },
});
