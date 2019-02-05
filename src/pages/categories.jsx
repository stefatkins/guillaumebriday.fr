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

    <h2 className="text-4xl">Catégories</h2>

    <p className="font-light text-grey-darker text-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, tenetur enim hic cum ex ad nemo quam placeat voluptas quod, soluta fugiat eum iste deserunt dolore consequatur culpa totam laborum.
    </p>

    <ul className="list-reset mb-8">
      {group.map(category => (
        <React.Fragment key={category.fieldValue}>
          <h2 className="inline bg-indigo-lightest text-indigo py-1 px-4 rounded-full text-xs font-semibold">{category.fieldValue}</h2>

          {category.edges.map(({ node: post }) => (
            <li
              className="mb-6"
              key={post.id}
              itemScope=""
              itemType="http://schema.org/BlogPosting"
            >

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
