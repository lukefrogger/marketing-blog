import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"

const BlogCarousel = ({count}) => {
    const data = useStaticQuery(graphql`
        query BlogCarousel($count: Int) {
            allDatoCmsBlogPost(limit: $count, sort: {order: DESC, fields: meta___createdAt}) {
                edges {
                    node {
                        title
                        slug
                        featuredImage {
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        snippitNode {
                            childMarkdownRemark {
                                html
                            }
                        }
                        meta {
                            createdAt
                        }
                    }
                }
            }
        }
    `);
    const posts = data.allDatoCmsBlogPost.edges;
    return(
        <div className="flex-grid top-margin-40">
            {posts.map(({node: post}) => {
                return (
                    <div className="flex1">
                        <Link to={post.slug}>
                            <div className="card">
                                <div className="card__image">
                                    <Img fluid={post.featuredImage.fluid} />
                                </div>
                                <div className="card__caption">
                                    <div className="card__title">{post.title}</div>
                                    <div className="card__date">{post.meta.createAt}</div>
                                    <div className="card__description" dangerouslySetInnerHTML={{__html: post.snippitNode.childMarkdownRemark.html}}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogCarousel;