import React from "react";
import { Link } from "gatsby";

const SideBarNav = ({name}) => {

    return (
        <div className="container__sidebar">
            <div className="sidebar">
              <h6 className="sidebar__title">
                <Link to="/">{name}</Link>
              </h6>
              <ul className="sidebar__menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
        </div>
    );
}

export default SideBarNav;
