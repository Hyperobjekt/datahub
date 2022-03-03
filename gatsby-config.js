const path = require("path");
const metadata = require("./config/metadata.json");
module.exports = {
  siteMetadata: metadata,
  plugins: [
    {
      resolve: `gatsby-theme-hypersite`,
      options: {
        contentPath: `content/pages`,
        assetPath: `content/assets`,
        templates: {
          customFrontmatter: path.resolve(
            "./src/templates/customFrontmatter.js"
          ),
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "iam2opj",
        },
      },
    },
    // manifest configuration for home screen options
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HigherEd DataHub`,
        short_name: `HigherEd DataHub`,
        start_url: `/`,
        display: `standalone`,
        icon: "static/images/datahub-favicon.png",
      },
    },
  ],
  flags: { FAST_DEV: true },
};
