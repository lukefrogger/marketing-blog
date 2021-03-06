const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsSkill {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsPortfolio {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsBlogPost {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsLandingPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsSkill.edges.map(({ node: skill }) => {
        createPage({
          path: `/${skill.slug}`,
          component: path.resolve(`./src/templates/skill.js`),
          context: {
            slug: skill.slug,
          },
        })
      });
      result.data.allDatoCmsPortfolio.edges.map(({ node: portfolio }) => {
        createPage({
          path: `/portfolio/${portfolio.slug}`,
          component: path.resolve(`./src/templates/portfolio.js`),
          context: {
            slug: portfolio.slug,
          },
        })
      });
      result.data.allDatoCmsBlogPost.edges.map(({ node: post }) => {
        createPage({
          path: `/blog/${post.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: post.slug,
          },
        })
      });
      result.data.allDatoCmsLandingPage.edges.map(({ node: page }) => {
        createPage({
          path: `/${page.slug}`,
          component: path.resolve(`./src/templates/landing-page.js`),
          context: {
            slug: page.slug,
          },
        })
      });
      resolve()
    })
  })
}
