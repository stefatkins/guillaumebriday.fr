import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom'
import algoliasearch from "algoliasearch"
import AutoComplete from './AutoComplete'

const searchClient = algoliasearch('8MB3KSYZEQ', '7fc62cf15955fb0a464f0c2a7ec8bb1e')

export default ({ isBlog }) => {
  const activeClassName = isActive => {
    let classes = 'header-link flex-no-shrink hover:no-underline hover:text-indigo relative mr-4 my-2 md:my-0 font-semibold sm:text-base md:text-lg'
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
        <div className="-my-2px py-4 flex flex-col md:flex-row justify-between items-baseline">
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

            <Link getProps={className} to="/mon-profil">
              Mon profil
            </Link>

            <div className="flex items-baseline inline border border-indigo rounded-full mt-2 md:mt-0 py-2 px-3 leading-tight w-full">
              <InstantSearch indexName="blog" searchClient={searchClient}>
                <Index indexName="blog">
                  <Configure hitsPerPage={5} />
                  <AutoComplete />
                </Index>
              </InstantSearch>

              <FontAwesomeIcon icon="search" className="text-indigo" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
