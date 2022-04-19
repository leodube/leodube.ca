import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `leodube.ca`,
    siteUrl: `https://www.leodube.ca`,
  },
  proxy: {
    prefix: "/admin",
    url: process.env.ADMIN_API_URL || "http://localhost:1337",
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
