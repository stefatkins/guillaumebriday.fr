import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { group },
    site,
  },
}) => (
  <>
    <Helmet title={`Catégories | ${site.siteMetadata.title}`} />
    <h1>Catégories</h1>

    <ul className="list-reset mb-8">
      {group.map(category => (
        <React.Fragment key={category.fieldValue}>
          <h3 className="my-4">{category.fieldValue}</h3>

          {category.edges.map(({ node: post }) => (
            <li
              className="flex my-2"
              key={post.id}
              itemScope=""
              itemType="http://schema.org/BlogPosting"
            >
              <time
                className="w-1/3 md:w-1/6 flex-no-shrink text-right pr-3"
                itemProp="datePublished"
                content={post.fields.datePublished}
              >
                {post.fields.date}
              </time>

              <Link to={post.fields.slug}>
                <span itemProp="name">{post.frontmatter.title}</span>
              </Link>
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            id
            fields {
              slug
              datePublished: date(formatString: "YYYY-MM-DD")
              date: date(formatString: "DD MMM YYYY", locale: "fr")
            }
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  }
`
