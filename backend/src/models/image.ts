import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";
import { cloudinaryImage } from "@keystone-6/cloudinary";

export const image = list({
  fields: {
    label: text(),
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        folder: process.env.CLOUDINARY_API_FOLDER,
      },
    }),
  },
});
