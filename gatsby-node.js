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
      }
    `).then(result => {
      result.data.allDatoCmsSkill.edges.map(({ node: skill }) => {
        createPage({
          path: `services/${skill.slug}`,
          component: path.resolve(`./src/templates/skill.js`),
          context: {
            slug: skill.slug,
          },
        })
      })
      resolve()
    })
  })
}
