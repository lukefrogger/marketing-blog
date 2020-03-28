import React from "react";
import { Link } from "gatsby";

const SideBarNav = ({name, navItems}) => {

    return (
        <div className="container__sidebar">
            <div className="sidebar">
              <h6 className="sidebar__title">
                <Link to="/">{name}</Link>
              </h6>
              <ul className="sidebar__menu">
                {navItems.map(item => <li><Link to={`/${item.node.slug}`}>{item.node.pageTitle}</Link></li>)}
                <Link className="button outline-white">Contact Me</Link>
              </ul>
            </div>
        </div>
    );
}

export default SideBarNav;
