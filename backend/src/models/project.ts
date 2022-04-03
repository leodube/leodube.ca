import { list } from "@keystone-6/core";
import { text, select } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import "dotenv/config";

export const project = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text(),
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        folder: process.env.CLOUDINARY_API_FOLDER,
      },
    }),
    type: select({
      options: [
        { label: "Personal", value: "personal" },
        { label: "Professional", value: "professional" },
      ],
      defaultValue: "personal",
      ui: { displayMode: "segmented-control" },
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
    labelField: "title",
    description: "Projects worked on.",
    listView: {
      initialColumns: ["title", "subtitle", "type"],
    },
  },
});
