import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const TopNav = ({siteName, navItems}) => {
    return (
        <div className="container__desktop-nav">
            <div className="desktop-header">
            <div className="desktop-nav__logo logo-text">
                <Link to="/">{siteName}</Link>
            </div>
            <div className="desktop-nav__menu">
                {navItems.map((item, i) => <Link key={i} to={`/${item.node.slug}`}>{item.node.title}</Link>)}
                <Link to="contact" className="button outline-white">Contact Me</Link>
            </div>
            </div>
        </div>
    )
}

TopNav.propTypes = {
    siteName: PropTypes.string,
    navItems: PropTypes.array
};

  
export default TopNav;