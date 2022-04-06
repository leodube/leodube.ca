import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Leo Dube",
    description: "Personal portfolio",
    author: "@leodube",
    siteUrl: `https://www.leodube.ca`,
  },
  proxy: {
    prefix: "/admin",
    url: process.env.ADMIN_API_URL,
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
