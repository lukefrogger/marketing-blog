import React from "react";
import Img from 'gatsby-image'

const Header = ({ data }) => {
    return (
        <div className={`header-image ${data.fullHeight ? 'full-height' : 'half-height'}`}>
            <Img 
                fluid={data.image.fluid} 
                style={{height: '100%'}} 
                imgStyle={{ objectFit: 'cover' }} 
            />
            <div className="page-wrapper">
                <div className="header-image__title-container">
                    <div>Hey, I'm</div>
                    <div className="title-container__title">{data.title}</div>
                    <div className="divider" />
                    <div className="title-container__subTitle">
                        {data.subTitle.split('\n').map((item, i) => {
                            return <div key={i}>{item}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;