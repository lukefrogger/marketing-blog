import React from "react";

const SectionTitle = ({category, title, color, catColor="orange"}) => {
    return(
        <div className="section-title">
            <div className={`section-title__category ${catColor}`}>{category}</div>
            <div className={`section-title__title ${color}`}>{title}</div>
        </div>
    )
}

export default SectionTitle;