import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      return (
        <footer className="bg-black text-white px-3 py-6">
          <div className="container mx-auto max-w-xl ">
            <p className="m-0 text-lg">{data.site.siteMetadata.title}</p>

            <div className="flex flex-col md:flex-row justify-between py-4">
              <p className="m-0 mr-4 leading-loose">
                {data.site.siteMetadata.description}
              </p>

              <div className="flex-no-shrink flex flex-wrap md:w-1/3 mt-4 md:mt-0">
                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline" to="/">Home</Link>
                </span>

                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline w-1/3" to="/a-propos">A propos</Link>
                </span>

                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline w-1/3" to="/blog">Blog</Link>
                </span>

                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline w-1/3" to="/categories">Catégories</Link>
                </span>

                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline w-1/3" to="/photos">Photos</Link>
                </span>

                <span className="w-1/3 mb-2">
                  <Link className="footer-link relative text-grey hover:text-grey-lightest hover:no-underline w-1/3" to="/mon-profil">Mon profil</Link>
                </span>
              </div>
            </div>

            <div className="flex justify-end items-baseline border-t pt-4">
              <ul className="list-reset flex justify-between w-1/2 md:w-1/4">
                <li>
                  <a className="text-grey hover:text-grey-lightest" href="/rss.xml" title="RSS">
                    <FontAwesomeIcon icon="rss" />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://github.com/guillaumebriday"
                    title="GitHub"
                  >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://twitter.com/guillaumebriday"
                    title="Twitter"
                  >
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://instagram.com/guillaumebriday"
                    title="Instagram"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://www.linkedin.com/in/guillaumebriday"
                    title="Linkedin"
                  >
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://www.amazon.fr/?tag=guillaumebrid-21"
                    title="Amazon"
                  >
                    <FontAwesomeIcon icon={['fab', 'amazon']} />
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey hover:text-grey-lightest"
                    href="https://www.paypal.me/guillaumebriday"
                    title="M'offrir un café"
                  >
                    <FontAwesomeIcon icon={['fab', 'paypal']} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      )
    }}
  />
)
