import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const TopNav = ({siteName}) => {
    return (
        <div className="container__desktop-nav">
            <div className="desktop-header">
            <div className="desktop-nav__logo">
                <Link to="/">{siteName}</Link>
            </div>
            <div className="desktop-nav__menu">
                <Link to="/">Home</Link>
                <Link to="/thing">Thing</Link>
            </div>
            </div>
        </div>
    )
}

TopNav.propTypes = {
    siteName: PropTypes.string
};

  
export default TopNav;