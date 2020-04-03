import React from "react";
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Header = ({ data }) => {
    return (
        <>
            <div className={`header-image ${data.fullHeight ? 'full-height' : 'half-height'}`}>
                <Img 
                    fluid={data.image.fluid} 
                    style={{height: '100%'}} 
                    imgStyle={{ objectFit: 'cover' }} 
                />
            </div>
            <div className={`page-wrapper ${data.fullHeight ? 'full-height' : 'half-height'}`}>
                <div className="header-image__title-container">
                    { data.fullHeight && <div>Hey, I'm</div> }
                    <div className={`title-container__title ${data.fullHeight === false ? 'smaller' : '' }`}>{data.title}</div>
                    <div className="divider" />
                    <div className="title-container__subTitle">
                        {data.subTitle.split('\n').map((item, i) => {
                            return <div key={i}>{item}</div>
                        })}
                    </div>
                </div>
                { data.fullHeight && 
                    <div className="header-image__arrow">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div> 
                }
            </div>
        </>
    )
}

export default Header;