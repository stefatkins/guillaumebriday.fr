import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ pageContext: { previous, next } }) => (
  <div className="my-6 py-6 flex flex-wrap border-t border-b">
    <div className="w-full sm:w-1/2">
      {previous && (
        <>
          <div className="mb-4">
            <span className="bg-indigo-lightest text-indigo py-1 px-4 rounded-full text-xs font-semibold">
              <FontAwesomeIcon icon="chevron-left" /> Article précédent
            </span>
          </div>

          <Link to={previous.fields.slug} rel="prev"  className="font-semibold text-2xl text-grey-darkest">
            {previous.frontmatter.title}
          </Link>
        </>
      )}
    </div>

    <div className="w-full mt-3 sm:w-1/2 sm:mt-0 text-right">
      {next && (
        <>
          <div className="mb-4">
            <span className="bg-indigo-lightest text-indigo py-1 px-4 rounded-full text-xs font-semibold">
              Article suivant <FontAwesomeIcon icon="chevron-right" />
            </span>
          </div>

          <Link to={next.fields.slug} rel="next" className="font-semibold text-2xl text-grey-darkest">
            {next.frontmatter.title}
          </Link>
        </>
      )}
    </div>
  </div>
)
