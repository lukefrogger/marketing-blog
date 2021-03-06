import React from "react";
import { Link } from "gatsby";

const Footer = ({social, navItems}) => {
    return (
        <footer className="footer">
            <div className="page-wrapper">
                <div className="flex-grid">
                    <div className="flex1">
                        <h4>Luke Frauhiger</h4>
                        {/* <p><Link to="about">About Me</Link></p> */}
                        <p><Link to="">Resume</Link></p>
                        {/* <p><Link to="">Technology Blog</Link></p> */}
                    </div>
                    <div className="flex1">
                        <h4>Services</h4>
                        {navItems.map((item, i) => <p key={i} ><Link to={`/${item.node.slug}`}>{item.node.title}</Link></p>)}
                    </div>
                    <div className="flex1">
                        <h4>Contact</h4>
                        <p><Link to="contact">Contact Form</Link></p>
                        {social.edges.map((profile, i) => {
                            return (
                                <p key={i}><a href={profile.node.url}>{profile.node.display}</a></p>
                            )
                        })}
                    </div>
                </div>
                <div className="text-right copywrite">
                    ©2019 Pine Consulting - All rights reserved. 
                </div>
            </div>
        </footer>
    )
}

export default Footer;