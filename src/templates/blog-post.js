import React from "react"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BackgroundAngle from "../components/backgroundAngle"
import SectionTitle from "../components/sectionTitle"

export default ({ data: {post} }) => (
    <Layout headerDetails={
        {
          image: post.headerImage, 
          title: "Blog", 
          subTitle: "I’m a full stack developer, designer, and software architect. I’ve been building software for 7 years and want to share my experience with others.",
          fullHeight: false
        }
    }>
        <HelmetDatoCms seo={post.seoMetaTags} />
        <div className="section">
            <BackgroundAngle color="255,255,255" slash="forward" />
            <div className="page-wrapper ">
                <SectionTitle category="Writing" title={post.title} color="blue" />
                {post.body.map((record, i) => {
                    if(record.paragraphNode) {
                        return (
                            <div key={i} className="bottom-margin-20">
                                <div dangerouslySetInnerHTML={{__html: record.paragraphNode.childMarkdownRemark.html}} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={i} className="bottom-margin-20">
                                <Img className="top-margin-40" fluid={record.source.fluid} objectFit="cover" style={{'box-shadow': '2px 4px 10px rgba(51, 51, 51, 0.3'}}/>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </div>
    </Layout>
)

export const query = graphql`
    query postQuery($slug: String!) {
        post: datoCmsBlogPost(slug: { eq: $slug }) {
            title
            headerImage {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
            }
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            body {
                ... on DatoCmsImage {
                    id
                    source {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
                ... on DatoCmsText {
                    id
                    paragraphNode {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
              
    }
`
