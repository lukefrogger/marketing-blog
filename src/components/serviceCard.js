import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs, faPencilRuler, faChartLine, faSitemap, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const ServiceCard = ({ service }) => {
    const setIcon = (iconName) => {
        switch(iconName) {
            case 'Crosshairs':
                return <FontAwesomeIcon icon={faCrosshairs} />
            case 'PencilRuler':
                return <FontAwesomeIcon icon={faPencilRuler} />
            case 'ChartLine':
                return <FontAwesomeIcon icon={faChartLine} />
            case 'Sitemap':
                return <FontAwesomeIcon icon={faSitemap} />
            default:
                return <FontAwesomeIcon icon={faGlobeAmericas} />
        }
    }

    return (
        <div className="service-card">
            <div className="icon">
                {setIcon(service.icon)}
            </div>
            <h3 className="title">{service.title}</h3>
            <div className="text">{service.text}</div>
        </div>
    )
}

export default ServiceCard;