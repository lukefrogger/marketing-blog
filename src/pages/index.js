import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout headerDetails={
    {
      image: data.datoCmsHome.headerImage, 
      title: data.datoCmsHome.personalName, 
      subTitle: data.datoCmsHome.overallSkillsListNode.childMarkdownRemark.rawMarkdownBody,
      fullHeight: true
    }
  }>
    {/* <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      personalName
      overallSkillsListNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      headerImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      contact {
        ... on DatoCmsCategory {
          category
          id
        }
        ... on DatoCmsTitle {
          title
          id
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
      }
      customers {
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
        ... on DatoCmsHorizontalIconSkill {
          id
          name
          description
          icon
        }
      }
      design {
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
        ... on DatoCmsImage {
          id
          source {
            fluid {
              src
              srcSet
              base64
            }
          }
        }
      }
      discover {
        ... on DatoCmsImage {
          id
          title
          positionRight
          positionLeft
          positionCenter
          source {
            fluid {
              src
              srcSet
              base64
            }
          }
        }
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
      }
      services {
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsSkillCard {
          id
          skillName
          skillDescription
          icon
        }
      }
      software {
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
        ... on DatoCmsImage {
          id
          title
          positionRight
          positionLeft
          positionCenter
          source {
            fluid {
              srcSet
              src
              base64
            }
          }
        }
      }
      writing {
        ... on DatoCmsCategory {
          id
          category
        }
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsParagraph {
          id
          paragraph
        }
      }
    }
  }
`
