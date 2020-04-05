import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const SectionTitle = ({category, title, color, catColor="orange", link=false}) => {
    return(
        <div className="section-title">
            <div className={`section-title__category ${catColor}`}>{category}</div>
            {link ? 
                <Link to={link} ><div className={`section-title__title ${color}`}>{title}<span className="link-icon"><FontAwesomeIcon icon={faLink} /></span></div></Link>
                :
                <div className={`section-title__title ${color}`}>{title}</div>
            }
        </div>
    )
}

export default SectionTitle;