import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const seoTag = list({
  fields: {
    page: text({ validation: { isRequired: true } }),
    metaTitle: text(),
    metaDescription: text(),
  },
  ui: {
    labelField: "page",
    description: "Set the SEO attributes for a given page.",
  },
});
