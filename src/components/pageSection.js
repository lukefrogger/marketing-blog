import React from "react"
import Img from 'gatsby-image'
import SectionTitle from "./sectionTitle"

const PageSection = ({ data }) => {
    const sectionType = data.category;
    const backgroundGrad = Math.floor(Math.random() * (80 - 40)) + 40;
    const backgroundAngle = Math.floor(Math.random() * (140 - 110)) + 110;

    return (
        <>  
            <div 
                className="background-angle" 
                style={{background: `linear-gradient(${backgroundAngle}deg, rgba(255,255,255,1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
            />
            <div className="page-wrapper">
                <div className="flex-grid">
                    <div className="flex1 picture">
                        <Img fluid={data.image.fluid} objectFit="cover" />
                    </div>
                    <div className="flex3">
                        <SectionTitle category={data.category} title={data.title} />
                        <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageSection;