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
                {navItems.map((item, i) => <li key={i}><Link to={`/${item.node.slug}`}>{item.node.title}</Link></li>)}
                <Link to="contact" className="button outline-white">Contact Me</Link>
              </ul>
            </div>
        </div>
    );
}

export default SideBarNav;
