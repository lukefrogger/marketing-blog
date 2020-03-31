import React from "react";
import { Link } from "gatsby";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="page-wrapper">
                <div className="flex-grid">
                    <div className="flex1">
                        <h4>Luke Frauhiger</h4>
                        <p><Link to="">About Me</Link></p>
                        <p><Link to="">Resume</Link></p>
                        {/* <p><Link to="">Technology Blog</Link></p> */}
                    </div>
                    <div className="flex1">
                        <h4>Services</h4>
                        <p><Link to="">Web Design</Link></p>
                        <p><Link to="">Lead Generation</Link></p>
                        <p><Link to="">Online Marketing</Link></p>
                        <p><Link to="">Software Consulting</Link></p>
                    </div>
                    <div className="flex1">
                        <h4>Contact</h4>
                        <p><Link to="">Contact Form</Link></p>
                        <p><Link to="">luke.frauhiger@gmail.com</Link></p>
                        <p><Link to="">333-444-5555</Link></p>
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