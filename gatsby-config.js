const config = require("./src/data/config/config.json")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: process.env.SITEURL || "https://suburbancoworking.gatsbyjs.io",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-marketing-platform",

      options: {
        dataLayer: {
          // Preset dataLayer values
          // gaPropertyId: '[Google Analytics ID]',
        },
        tagmanager: {
          id: config.googleTagmanagerId,
          params: {
            // GTM URL Parameters
            // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
            // gtm_cookies_win: 'x'
          }
        },
        analytics: {
          id: '[Google Analytics ID]',
        },
        optimize: {
          id: '[Google Optimize ID]',
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["roboto:300,400,500,700", "poly"],
        display: "swap",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    }
  ],
}
