import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import BackgroundAngle from "../components/backgroundAngle"
import SectionTitle from "../components/sectionTitle"
import ContactBanner from "../components/contactBanner"
import MarketingCard from "../components/marketingCard"


export default ({ data }) => {
  const skill = data.skill;
  const homeSection = data.home.pageSections.find(section => section.category.toLowerCase() === skill.category.toLowerCase());

  return (
    <Layout headerDetails={
      {
        image: skill.headerImage, 
        title: skill.title, 
        subTitle: skill.subTitle,
        fullHeight: false
      }
    }>
      <HelmetDatoCms seo={skill.seoMetaTags} />
      <div className="section">
        <BackgroundAngle color="255,255,255" slash="forward" />
        <div className="page-wrapper ">
          <SectionTitle category={skill.category} title={skill.pageTitle} color="blue" />
          { skill.description && 
            <h5 className="bottom-margin-40" dangerouslySetInnerHTML={{__html: skill.description}} />
          }
          {
            skill.body.map(section => {
              if(section.homePageSection) {
                return( 
                  <>
                    <div className="flex-grid bottom-margin-40">
                      <div className="flex1">
                        <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                      </div>
                    </div>
                    <div className="flex-grid bottom-margin-40">
                      <div className="flex1">
                        {[1,2,3,4].map(num => {
                          return <MarketingCard key={num} service={homeSection[`marketingCard${num}`]} />
                        })}
                      </div>
                    </div>
                  </>
                )
              }
              else if(!section.image) {
                return (
                  <div className="flex-grid bottom-margin-40">
                    <div className="flex1">
                      <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                    </div>
                  </div>
                )
              }
              else if(section.imageCenter) {
                return (
                  <>
                    <div className="flex-grid bottom-margin-40">
                      <div className="flex1 picture">
                          <Img fluid={section.image.fluid} objectFit="cover" />
                      </div>
                    </div>
                    <div className="flex-grid bottom-margin-40">
                      <div className="flex1">
                        <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                      </div>
                    </div>
                  </>
                )
              }
              else if(section.imageLeft) {
                return (
                  <div className="flex-grid bottom-margin-40">
                    <div className="flex1 picture">
                        <Img fluid={section.image.fluid} objectFit="cover" />
                    </div>
                    <div className="flex4">
                      <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                      {section.pageLink && 
                        <div style={{display: 'flex', marginTop: '15px'}}>
                          <Link to={section.pageLink} className="button outline-blue">Read More</Link>
                        </div>
                      }
                    </div>
                  </div>
                )
              }
              else if(section.imageRight) {
                return (
                  <div className="flex-grid bottom-margin-40">
                    <div className="flex4">
                      <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                    </div>
                    <div className="flex1 picture">
                        <Img fluid={section.image.fluid} objectFit="cover" />
                    </div>
                  </div>
                )
              }
              return (
                <div>There's missing content here.</div>
              )
            })
          }
        </div>
        <ContactBanner />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query skillQuery($slug: String!) {
    skill: datoCmsSkill(slug: { eq: $slug }) {
      slug,
      headerImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      title
      subTitle
      category
      pageTitle
      description
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      body {
        pageLink
        imageCenter
        imageLeft
        imageRight
        homePageSection
        textNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    home: datoCmsIndexPage {
      pageSections {
        marketingCard4
        marketingCard3
        marketingCard1
        marketingCard2
        category
        slug
      }
    }
  }
`
