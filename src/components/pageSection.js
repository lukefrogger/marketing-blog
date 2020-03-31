import React from "react"
import Img from 'gatsby-image'
import SectionTitle from "./sectionTitle"
import ServiceCard from "./serviceCard"
import BlogCarousel from "./blogCarousel"
import ContactForm from "./contactForm"
import MarketingCard from "./marketingCard"

const PageSection = ({ data }) => {
    const sectionType = data.category;
    const backgroundGrad = Math.floor(Math.random() * (80 - 40)) + 40;
    const defaultBackgroundAngle = Math.floor(Math.random() * (140 - 110)) + 110;

    if(sectionType == 'Discover') {
        const angleColor = '255,255,255';
        return (
            <>  
                <div 
                    className="background-angle" 
                    style={{background: `linear-gradient(${defaultBackgroundAngle}deg, rgba(${angleColor},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
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
                    <div className="flex1 two-wide">
                        <ServiceCard service={data.servicesCard1} />
                    </div>
                    <div className="flex1 two-wide">
                        <ServiceCard service={data.servicesCard2} />
                    </div>
                    <div className="flex1 two-wide">
                        <ServiceCard service={data.servicesCard3} />
                    </div>
                    <div className="flex1 two-wide">
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
    else if (sectionType == 'Contact') {
        return (
            <>
                <Img className="background-image" fluid={data.image.fluid} style={{position: 'absolute'}} />
                <div className="page-wrapper text-center">
                    <SectionTitle category={data.category} title={data.title} color="white" />
                    <div className="body text-white" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    <div className="flex-grid">
                        <div className="flex1 mobile-hidden"></div>
                        <div className="flex1"><ContactForm /></div>
                        <div className="flex1 mobile-hidden"></div>
                    </div>
                    
                </div>  
            </>
        )
    }
    else if (sectionType == 'Software') {
        const angleColor = '255,255,255';
        return (
            <>  
                <div 
                    className="background-angle" 
                    style={{background: `linear-gradient(${defaultBackgroundAngle}deg, rgba(${angleColor},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
                />
                <div className="page-wrapper">
                    <div className="flex-grid">
                        <div className="flex5">
                            <SectionTitle category={data.category} title={data.title} color="blue" />
                            <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                        </div>
                        <div className="flex1 small-image">
                            <Img className="top-margin-40" fluid={data.image.fluid} />
                        </div>
                    </div>
                    <div className="flex-grid top-margin-20">
                        {data.imageGallery.map(image => {
                            return (
                                <div className="flex1">
                                    <Img fixed={image.fixed} />
                                </div>
                            )
                        })}
                        
                    </div>
                    
                </div>  
            </>
        )
    }
    else if (sectionType == 'Design') {
        const angleColor = '255,255,255';
        return (
            <>  
                <div 
                    className="background-angle" 
                    style={{background: `linear-gradient(${defaultBackgroundAngle}deg, rgba(${angleColor},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
                />
                <div className="page-wrapper">
                    <div className="flex-grid">
                        <div className="flex5">
                            <SectionTitle category={data.category} title={data.title} color="blue" />
                            <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                        </div>
                        <div className="flex1 small-image">
                            <Img className="top-margin-40" fluid={data.image.fluid} />
                        </div>
                    </div>                    
                </div>  
            </>
        )
    }
    else if (sectionType == 'Customers') {
        const angleColor = '255,255,255';
        return (
            <>  
                <div className="page-wrapper">
                    <SectionTitle category={data.category} title={data.title} color="white" />
                    <div className="body text-white" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    <div className="text-white top-margin-40">
                        {[1,2,3,4].map(number => {
                            return (
                                <div className="marketingCard">
                                    <MarketingCard service={data[`marketingCard${number}`]} />
                                </div>
                            )
                        })}       
                    </div>     
                </div>  
            </>
        )
    }
    
}

export default PageSection;