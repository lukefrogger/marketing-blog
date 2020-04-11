import React from "react"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BackgroundAngle from "../components/backgroundAngle"
// import SectionTitle from "../components/sectionTitle"

export default ({ data: { posts }, data: { page } }) => (
    <Layout headerDetails={
        {
          image: page.headerImage, 
          title: page.title, 
          subTitle: page.subTitle,
          fullHeight: false
        }
    }>
        <HelmetDatoCms seo={page.seoMetaTags} />
        <div className="section">
            <BackgroundAngle color="255,255,255" slash="backward" />
            <div className="page-wrapper ">
                {/* <SectionTitle category={portfolio.category} title={portfolio.pageTitle} color="blue" /> */}
                <h3>Recent Blog Posts</h3>
                {posts.edges.map((node, i) => {
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
    query blogQuery($skip: Int!, $limit: Int!) {
        page: datoCmsBlogPage {
            headerImage {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            title
            subTitle
        }
        posts: allDatoCmsBlogPost(
            sort: { fields: meta___publishedAt, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    title
                    slug
                    snippitNode {
                        childMarkdownRemark {
                            html
                        }
                    }
                    featuredImage {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    }
`
