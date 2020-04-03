import React from "react"
import { Link } from "gatsby"

const ContactBanner = () => {
    return (
        <div className="banner orange">
            <div className="page-wrapper">
                <div className="banner__inner">
                    <h3 className="title">Have questions or want to connect?</h3>
                    <Link to="contact" className="button outline-black">Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner;