import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle";

const About = ({ data: { about } }) => (
  <Layout headerDetails={
    {
      image: about.headerImage, 
      title: about.title, 
      subTitle: about.subTitleNode.childMarkdownRemark.rawMarkdownBody,
      fullHeight: false
    }
  }>
    <HelmetDatoCms seo={about.seoMetaTags} />
    <SectionTitle category="About" title="Learn about me" color="blue" />
    
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
