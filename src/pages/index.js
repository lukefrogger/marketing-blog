import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageSection from "../components/pageSection"

const IndexPage = ({ data }) => (
  <Layout headerDetails={
    {
      image: data.datoCmsIndexPage.headerImage, 
      title: data.datoCmsIndexPage.pageTitle, 
      subTitle: data.datoCmsIndexPage.subTitleNode.childMarkdownRemark.rawMarkdownBody,
      fullHeight: true
    }
  }>
    <div className="section discover">
        <PageSection data={data.datoCmsIndexPage.pageSections.find(obj => obj.category == 'Discover')} />
    </div>
    <div className="section services blue">
        <PageSection data={data.datoCmsIndexPage.pageSections.find(obj => obj.category == 'Services')} />
    </div>
    <div className="section writing">
        <PageSection data={data.datoCmsIndexPage.pageSections.find(obj => obj.category == 'Writing')} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsIndexPage {
      pageTitle
      headerImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      subTitleNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      pageSections {
        category
        html
        htmlNode {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        marketingCard1
        marketingCard2
        marketingCard3
        marketingCard4
        servicesCard1
        servicesCard2
        servicesCard3
        servicesCard4
        title
      }
    }
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
