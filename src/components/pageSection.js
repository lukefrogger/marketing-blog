import React from "react"
import Img from 'gatsby-image'
import SectionTitle from "./sectionTitle"
import ServiceCard from "./serviceCard"
import BlogCarousel from "./blogCarousel"
import ContactForm from "./contactForm"
import MarketingCard from "./marketingCard"
import BackgroundAngle from "./backgroundAngle"

const PageSection = ({ data }) => {
    const sectionType = data.category;

    if(sectionType === 'Discover') {
        return (
            <>  
                <BackgroundAngle color="255,255,255" slash="forward" />
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
    else if (sectionType === 'Services') {
        return (
            <div className="page-wrapper">
                <SectionTitle category={data.category} title={data.title} color="white" />
                <div className="flex-grid"> 
                    {[1,2,3,4].map(num => {
                        return (
                            <div key={num} className="flex1 two-wide">
                                <ServiceCard service={data[`servicesCard${num}`]} />
                            </div>
                        )
                    })}
                </div>
            </div>  
        )
    }
    else if (sectionType === 'Writing') {
        return (
            <>
                <BackgroundAngle color="255,197,0" slash="back" />
                <div className="page-wrapper">
                    <SectionTitle category={data.category} title={data.title} color="black" catColor="blue" link="blog" />
                    <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    <BlogCarousel count={3}/>
                </div>  
            </>
        )
    }
    else if (sectionType === 'Contact') {
        return (
            <>
                <Img className="background-image" fluid={data.image.fluid} style={{position: 'absolute'}} />
                <div className="page-wrapper text-center">
                    <SectionTitle category={data.category} title={data.title} color="white" link="contact"  />
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
    else if (sectionType === 'Software') {
        return (
            <>  
                <BackgroundAngle color="255,255,255" slash="forward" />
                <div className="page-wrapper">
                    <div className="flex-grid">
                        <div className="flex5">
                            <SectionTitle category={data.category} title={data.title} color="blue" link="software-consulting" />
                            <div className="body" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                        </div>
                        <div className="flex1 small-image">
                            <Img className="top-margin-40" fluid={data.image.fluid} />
                        </div>
                    </div>
                    <div className="top-margin-20">
                        {[1,2,3,4].map(num => {
                            return (
                                <div key={num} className="marketingCard">
                                    <MarketingCard service={data[`marketingCard${num}`]} />
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </>
        )
    }
    else if (sectionType === 'Design') {
        return (
            <>  
                <BackgroundAngle color="255,255,255" slash="forward" />
                <div className="page-wrapper">
                    <div className="flex-grid">
                        <div className="flex5">
                            <SectionTitle category={data.category} title={data.title} color="blue"  link="web-design" />
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
    else if (sectionType === 'Customers') {
        return (
            <>  
                <div className="page-wrapper">
                    <SectionTitle category={data.category} title={data.title} color="white" link="local-marketing" />
                    <div className="body text-white" dangerouslySetInnerHTML={{__html: data.htmlNode.childMarkdownRemark.html}} />
                    <div className="text-white top-margin-40">
                        {[1,2].map((number, i) => {
                            return (
                                <div key={i} className="marketingCard">
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