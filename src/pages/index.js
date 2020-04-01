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
    {data.datoCmsIndexPage.pageSections.map((section, i) => {
      let loweredCat = section.category.toLowerCase();
      return (
        <div key={i} className={`section ${loweredCat} ${loweredCat == 'services' || loweredCat == 'customers' ? 'blue' : ''}`}>
            <PageSection data={section} />
        </div>
      )
    })}
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
        imageGallery {
          fixed(height: 120) {
            ...GatsbyDatoCmsFixed
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
  }
`
