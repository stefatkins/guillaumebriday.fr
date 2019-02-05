import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import Pagination from '../components/Pagination'
import { graphql } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
    site
  },
  pageContext,
}) => (
  <>
    <Helmet title={`Blog | ${site.siteMetadata.title}`} />

    <h1 className="text-4xl">Articles</h1>

    <p className="font-light text-grey-darker text-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, tenetur enim hic cum ex ad nemo quam placeat voluptas quod, soluta fugiat eum iste deserunt dolore consequatur culpa totam laborum.
    </p>

    <PostListing posts={posts} />
    <Pagination pageContext={pageContext} />
  </>
)

export const PostIndexQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            datePublished: date(formatString: "YYYY-MM-DD")
            date: date(formatString: "DD MMMM YYYY", locale: "fr")
          }
          frontmatter {
            layout
            title
            category
          }
        }
      }
    }
  }
`
