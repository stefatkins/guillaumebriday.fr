import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ isBlog }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => {
      const activeClassName = isActive => {
        let classes = 'header-link hover:no-underline hover:text-indigo relative mr-4 font-semibold sm:text-base md:text-lg'
        let activeClasses = isActive
          ? 'active text-indigo'
          : 'text-grey-darker'

        return { className: [classes, activeClasses].join(' ') }
      }

      const className = ({ isCurrent }) => activeClassName(isCurrent)
      const classNameBlog = ({ isCurrent }) => activeClassName(isBlog || isCurrent)

      return (
        <header className="container mx-auto max-w-2xl px-3">
          <nav className="my-8 text-grey border-b-2">
            <div className="-my-2px py-4 flex flex-col md:flex-row justify-between">
              <Link className="mr-4 text-2xl text-grey-darker" to="/">
                Guillaume <span className="font-extrabold text-black">BRIDAY</span>
              </Link>

              <div className="flex flex-col md:flex-row items-baseline">
                <Link getProps={classNameBlog} to="/blog">
                  Blog
                </Link>

                <Link getProps={className} to="/photos">
                  Photos
                </Link>

                <div className="inline border border-indigo rounded-full py-2 px-3 leading-tight">
                  <input className="appearance-none text-indigo-dark focus:outline-none focus:outline-none" type="text" placeholder="Rechercher" />
                  <FontAwesomeIcon icon="search" className="text-indigo" />
                </div>
              </div>
            </div>
          </nav>
        </header>
      )
    }}
  />
)

