import React from 'react'
import { formatReadingTime } from '../utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ post, allCommentsYaml }) => {
  const comments = allCommentsYaml ? allCommentsYaml.edges : []

  return (
    <header>
      <span itemProp="articleSection" className="bg-indigo-lightest text-indigo py-1 px-4 rounded-full text-xs font-semibold">{post.frontmatter.category}</span>

      <h1 className="mb-2 text-4xl text-indigo" itemProp="name">
        {post.frontmatter.title}
      </h1>

      <ul className="list-reset mb-4 text-sm">
        <li className="block sm:inline-block mr-3 text-grey-darker">
          <time
            dateTime={post.fields.datePublished}
            itemProp="datePublished"
            content={post.fields.datePublished}
          >
            <FontAwesomeIcon icon="calendar" /> Le {post.fields.date}
          </time>
        </li>

        <li className="block sm:inline-block mr-3 text-grey-darker">
          <FontAwesomeIcon icon="user" /> Par
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name"> Guillaume Briday</span>
          </span>
        </li>

        <li className="block sm:inline-block mr-3 text-grey-darker">
          <FontAwesomeIcon icon="comments" /> {comments.length} commentaire{comments.length > 1 ? 's' : ''}
        </li>

        <li className="block sm:inline-block mr-3 text-grey-darker">
          <FontAwesomeIcon icon="clock" /> {formatReadingTime(post.timeToRead)}
        </li>
      </ul>
    </header>
  )
}
