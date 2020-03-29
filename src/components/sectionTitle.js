import React from "react";

const SectionTitle = ({category, title}) => {
    return(
        <div className="section-title">
            <div className="section-title__category">{category}</div>
            <div className="section-title__title">{title}</div>
        </div>
    )
}

export default SectionTitle;