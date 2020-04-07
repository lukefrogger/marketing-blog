import React from "react"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BackgroundAngle from "../components/backgroundAngle"
import SectionTitle from "../components/sectionTitle"

export default ({ data: {portfolio} }) => (
    <Layout headerDetails={
        {
          image: portfolio.headerImage, 
          title: "Portfolio", 
          subTitle: "These are a few of the projects that I've done in the past. Use them to figure out my style and skill.",
          fullHeight: false
        }
    }>
        <HelmetDatoCms seo={portfolio.seoMetaTags} />
        <div className="section">
            <BackgroundAngle color="255,255,255" slash="forward" />
            <div className="page-wrapper ">
                <SectionTitle category={portfolio.category} title={portfolio.pageTitle} color="blue" />
                {portfolio.body.map((record, i) => {
                    return (
                        <div key={i} className="bottom-margin-20">
                            <div dangerouslySetInnerHTML={{__html: record.textNode.childMarkdownRemark.html}} />
                            <Img className="top-margin-40" fluid={record.image.fluid} objectFit="cover" style={{'box-shadow': '2px 4px 10px rgba(51, 51, 51, 0.3'}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </Layout>
)

export const query = graphql`
    query portfolioQuery($slug: String!) {
        portfolio: datoCmsPortfolio(slug: {eq: $slug}) {
            pageTitle
            slug
            category
            headerImage {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
            }
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            body {
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
