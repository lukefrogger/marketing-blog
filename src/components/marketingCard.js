import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faHandHoldingUsd, faHashtag, faImage } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

const MarketingCard = ({ service }) => {
    const setIcon = (iconName) => {
        switch(iconName) {
            case 'filter':
                return <FontAwesomeIcon icon={faFilter} />
            case 'moneyHand':
                return <FontAwesomeIcon icon={faHandHoldingUsd} />
            case 'hashtag':
                return <FontAwesomeIcon icon={faHashtag} />
            case 'google':
                return <FontAwesomeIcon icon={faGoogle} />
            default:
                return <FontAwesomeIcon icon={faImage} />
        }
    }

    return (
        <div className="marketing-card">
            <div className="icon">
                {setIcon(service.icon)}
            </div>
            <div className="body">
                <div className="title">{service.title}</div>
                <div className="text">{service.text}</div>
            </div>
        </div>
    )
}

export default MarketingCard;