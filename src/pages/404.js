import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle";
import ContactForm from "../components/contactForm";
import BackgroundAngle from "../components/backgroundAngle";

const NotFoundPage = ({ data }) => (
  <Layout headerDetails={
    {
      image: data.datoCmsContactPage.headerImage, 
      title: "Page Not Found", 
      subTitle: "What your looking for isn't here. Try using a different URL.",
      fullHeight: false
    }
  }>
    <HelmetDatoCms />
    <div className="section">
      <BackgroundAngle color="255,255,255" slash="forward" />
      <div className="page-wrapper ">
        <SectionTitle category="Failure" title="I can't find your page" color="blue" />
        <div className="flex-grid">
          <div className="flex4">
            <div>
              <h4>Unfortunately your page can't be found</h4>
              <p>Websites change and so do URLs; regardless I'm terribly sorry that the page you're looking doesn't exist here. Maybe try navigating around - 
                you might just find what you were looking for. </p>
              <br />
              <p>You can also fill out this form over here. Ask my any question you have about software or web design and so on.</p>
            </div>
          </div>
          <div className="flex1">
            <ContactForm showHeader={true} background={true} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPage {
    datoCmsContactPage {
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
