import React from 'react'
import { Link } from 'gatsby'

export default ({ posts }) => (
<ul className="list-reset">
  {posts
    .filter(post => post.node.frontmatter.title.length > 0)
    .map(({ node: post }) => (
      <li
        className="mb-6"
        key={post.id}
        itemScope=""
        itemType="http://schema.org/BlogPosting"
      >
        <span itemProp="articleSection" className="bg-indigo-lightest text-indigo py-1 px-4 rounded-full text-xs font-semibold">{post.frontmatter.category}</span>

        <h2 className="font-semibold m-0">
          <Link to={post.fields.slug} className="text-grey-darkest">
            <span itemProp="name">{post.frontmatter.title}</span>
          </Link>
        </h2>

        <div className="text-grey-darker text-sm">
          Le{' '}
          <span
            itemProp="datePublished"
            className="font-light"
            content={post.fields.datePublished}
          >
            {post.fields.date}
          </span>
        </div>
      </li>
    ))}
</ul>
)
