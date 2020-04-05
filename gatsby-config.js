require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Luke Frauhiger`,
    siteUrl: `https://lukefrauhiger.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162864266-1",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/404/`, `/dev-404-page/`, `/404.html`]
      }
    }
  ],
}