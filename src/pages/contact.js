import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle";
import ContactForm from "../components/contactForm";
import BackgroundAngle from "../components/backgroundAngle";

const Contact = ({ data: { contact } }) => (
  <Layout headerDetails={
    {
      image: contact.headerImage, 
      title: contact.title, 
      subTitle: contact.subTitle,
      fullHeight: false
    }
  }>
    <HelmetDatoCms seo={contact.seoMetaTags} />
    <div className="section">
      <BackgroundAngle color="255,255,255" slash="forward" />
      <div className="page-wrapper ">
        <SectionTitle category="Contact" title={contact.pageTitle} color="blue" />
        <div className="flex-grid">
          <div className="flex4">
            <div dangerouslySetInnerHTML={{__html: contact.bodyNode.childMarkdownRemark.html}} />
          </div>
          <div className="flex1">
            <ContactForm showHeader={true} background={true} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact

export const query = graphql`
  query ContactPage {
    contact: datoCmsContactPage {
      title
      subTitle
      pageTitle
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      headerImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
