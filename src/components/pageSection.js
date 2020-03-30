import React from "react"
import Img from 'gatsby-image'
import SectionTitle from "./sectionTitle"
import ServiceCard from "./serviceCard"
import BlogCarousel from "./blogCarousel"

const PageSection = ({ data }) => {
    const sectionType = data.category;
    const backgroundGrad = Math.floor(Math.random() * (80 - 40)) + 40;
    const defaultBackgroundAngle = Math.floor(Math.random() * (140 - 110)) + 110;

    if(sectionType == 'Discover') {
        const angleColor = '255,255,255';
        const backgroundAngle = defaultBackgroundAngle;
        return (
            <>  
                <div 
                    className="background-angle" 
                    style={{background: `linear-gradient(${backgroundAngle}deg, rgba(${angleColor},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
                />
                <div className="page-wrapper">
                    <div className="flex-grid">
                        <div className="flex1 picture">
                            <Img fluid={data.image.fluid} objectFit="cover" />
                        </div>
                        <div className="flex3">
                            <SectionTitle category={data.category} title={data.title} color="blue" />
                            <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                        </div>
                    </div>
                </div>
            </>
        )
    } 
    else if (sectionType == 'Services') {
        return (
            <div className="page-wrapper">
                <SectionTitle category={data.category} title={data.title} color="white" />
                <div className="flex-grid"> 
                    <div className="flex1">
                        <ServiceCard service={data.servicesCard1} />
                    </div>
                    <div className="flex1">
                        <ServiceCard service={data.servicesCard2} />
                    </div>
                    <div className="flex1">
                        <ServiceCard service={data.servicesCard3} />
                    </div>
                    <div className="flex1">
                        <ServiceCard service={data.servicesCard4} />
                    </div>
                </div>
            </div>  
        )
    }
    else if (sectionType == 'Writing') {
        const angleColor = '255,197,0';
        const backgroundAngle = Math.floor(Math.random() * (235 - 210)) + 210;
        return (
            <>
                <div 
                    className="background-angle" 
                    style={{background: `linear-gradient(${backgroundAngle}deg, rgba(${angleColor},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
                />
                <div className="page-wrapper">
                    <SectionTitle category={data.category} title={data.title} color="black" catColor="blue" />
                    <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    <BlogCarousel count={3}/>
                </div>  
            </>
        )
    }
    
}

export default PageSection;