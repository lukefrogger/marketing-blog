import React from "react"

const BackgroundAngle = ({color, slash}) => {
    const backgroundGrad = Math.floor(Math.random() * (80 - 40)) + 40;
    const forwardSlash = Math.floor(Math.random() * (140 - 110)) + 110;
    const backSlash = Math.floor(Math.random() * (235 - 210)) + 210;

    const angle = slash == 'forward' ? forwardSlash : backSlash;
    return (
        <div 
            className="background-angle" 
            style={{background: `linear-gradient(${angle}deg, rgba(${color},1) ${backgroundGrad}%, rgba(255,255,255,0) ${backgroundGrad}%)`}}
        />
    )
}

export default BackgroundAngle;