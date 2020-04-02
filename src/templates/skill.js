import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BackgroundAngle from "../components/backgroundAngle"
import SectionTitle from "../components/sectionTitle";

export default ({ data: {skill} }) => (
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
        <p className="bottom-margin-40" dangerouslySetInnerHTML={{__html: skill.description}} />
        {
          skill.body.map(section => {
            if(section.imageCenter) {
              return (
                <>
                  <div className="flex-grid bottom-margin-20">
                    <div className="flex1 picture">
                        <Img fluid={section.image.fluid} objectFit="cover" />
                    </div>
                  </div>
                  <div className="flex-grid bottom-margin-20">
                    <div className="flex1">
                      <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                    </div>
                  </div>
                </>
              )
            }
            else if(section.imageRight) {
              return (
                <div className="flex-grid bottom-margin-20">
                  <div className="flex1 picture">
                      <Img fluid={section.image.fluid} objectFit="cover" />
                  </div>
                  <div className="flex4">
                    <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                  </div>
                </div>
              )
            }
            else if(section.imageLeft) {
              return (
                <div className="flex-grid bottom-margin-20">
                  <div className="flex4">
                    <div dangerouslySetInnerHTML={{__html: section.textNode.childMarkdownRemark.html}} />
                  </div>
                  <div className="flex1 picture">
                      <Img fluid={section.image.fluid} objectFit="cover" />
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  </Layout>
)

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
        imageCenter
        imageLeft
        imageRight
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
  }
`
