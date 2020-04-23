import React, { useState } from "react"
import { graphql, Link } from 'gatsby'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare, faPhoneSquareAlt, faShareAlt, faBullhorn, faSearchDollar, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from 'gatsby-image'
import BackgroundAngle from "../components/backgroundAngle"
import { HelmetDatoCms } from 'gatsby-source-datocms'

export default ( {data: {page, social, site}}) => {

    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
    }
    const handleChange = e => {
        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formDOM = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
            'form-name': formDOM.getAttribute('name'),
            ...form,
            }),
        })
            .then(() => {
                setSubmitted(true);
            })
            .catch(error => alert(error));
    }

    return (
        <div className="single-page-500">
            <HelmetDatoCms 
                seo={page.seoMetaTags} 
                favicon={site.faviconMetaTags}
            />
            <div className="blue-background one-third">
                <Link className="brand" to="/">
                    <div className="name">
                        Luke Frauhiger
                    </div>
                    <div className="type">
                        Web Design
                    </div>
                </Link>
                { submitted == false ?
                    <form 
                        name="500-deal" 
                        className={`500-spw-deal contactForm text-white background`}
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <header>
                            <h1>Begin your digital future by claiming your $500 website</h1>
                        </header> 
                        <div hidden>
                            <label>
                                Don’t fill this out or your a sucka:{' '}
                                <input name="bot-field" onChange={handleChange} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input 
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                required={true} />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                className="input"
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                required={true} />
                        </div>
                        <div className="field">
                            <button className="button full-width solid-orange" type="submit">Claim Your Deal!</button>
                        </div>
                    </form>
                    :
                    <div className="form-submitted">
                        <h3>Thank you! I'll be reaching out to you very soon.</h3>
                    </div>
                }
                
            </div>
            <div className="two-thirds">
                <div className="social-items">
                    {social.edges.map(({node: item }) => {
                        if(item.profileType == 'Facebook') {
                        return <a key={item.url} href={item.url} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                        } else if (item.profileType == 'Phone') {
                            return <a key={item.url} href={`${item.url}`}><FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" /></a>
                        } else if(item.profileType == 'Email') {
                        return <a key={item.url} href={`${item.url}`}><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></a>
                        } else {
                            return <div>{JSON.stringify(item)}</div>
                        }
                    })}
                </div>
                <div className="wrapper">
                    <div className="value-prop white-background">
                        <h1>A great website is the core of an online business</h1>
                        <div className="line"></div>
                        <div className="values">
                            <div className="item"><FontAwesomeIcon icon={faShareAlt} size="lg"/> Connect you with your customers</div>
                            <div className="item"><FontAwesomeIcon icon={faBullhorn} size="lg"/> Inform and equip your visitors</div>
                            <div className="item"><FontAwesomeIcon icon={faSearchDollar} size="lg"/> Bring in new customers and leads</div>
                            <div className="item"><FontAwesomeIcon icon={faGlobeAmericas} size="lg"/> Allow you to conduct business online</div>
                        </div>
                    </div>
                </div>
                <div className="perks text-center">
                    <h3>Every website somes with these perks</h3>
                    <div className="perk-list">
                        {page.images.map((img, i) => {
                            return (
                                <div key={i} className="perk">
                                    <div className="title">{img.title}</div>
                                    <Img fixed={img.fixed} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <BackgroundAngle color="255,255,255" slash="forward" />
            </div>
        </div>
    )
}

export const query = graphql`
    query LandingPageQuery($slug: String!) {
        page: datoCmsLandingPage(slug: { eq: $slug }) {
            images {
                title
                fixed(width: 75) {
                    ...GatsbyDatoCmsFixed
                }
            }
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
        social: allDatoCmsSocialProfile {
            edges {
                node {
                    profileType
                    url
                    display
                }
            }
        }
        site: datoCmsSite {
            faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
    }
`
