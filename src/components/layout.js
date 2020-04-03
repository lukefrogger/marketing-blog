import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import SideBarNav from "./sideBarNav";
import TopNav from "./topNav";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const TemplateWrapper = ({ children, headerDetails }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            domain
            name
            globalSeo {
              facebookPageUrl
              siteName
              titleSuffix
              twitterAccount
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsIndexPage {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
          }
          allDatoCmsSocialProfile {
            edges {
              node {
                profileType
                url
                display
              }
            }
          }
          allDatoCmsSkill(sort: {fields: slug}) {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsIndexPage.seoMetaTags}
          />

          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
                <div className="mobile-header__menu">
                    {/* <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setShowMenu(!showMenu);
                      }}
                    /> */}
                    {showMenu ?
                      <FontAwesomeIcon icon={faTimes} onClick={e => {
                        e.preventDefault();
                        setShowMenu(!showMenu);
                      }}/>
                      :
                      <FontAwesomeIcon icon={faBars} onClick={e => {
                        e.preventDefault();
                        setShowMenu(!showMenu);
                      }}/>
                    }
                </div>
              </div>
            </div>  
            <TopNav siteName={data.datoCmsSite.globalSeo.siteName} navItems={data.allDatoCmsSkill.edges} />
            <Header data={headerDetails} />
            {children}
          </div>
          <Footer social={data.allDatoCmsSocialProfile} navItems={data.allDatoCmsSkill.edges} />
          <SideBarNav name={data.datoCmsSite.globalSeo.siteName} navItems={data.allDatoCmsSkill.edges} />
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
