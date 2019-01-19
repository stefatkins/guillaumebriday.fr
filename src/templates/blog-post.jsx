import React from 'react'
import Helmet from 'react-helmet'
import PostHeader from '../components/PostHeader'
import PostPagination from '../components/PostPagination'
import PostComments from '../components/PostComments'
import { graphql } from 'gatsby'

export default ({ data: { markdownRemark: post, allCommentsYaml, site }, pageContext }) => (
  <>
    <Helmet title={`${post.frontmatter.title} | ${site.siteMetadata.title}`} />

    <article itemScope="" itemType="http://schema.org/BlogPosting">
      <PostHeader post={post} allCommentsYaml={allCommentsYaml} />

      <div
        className="post-content leading-loose"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <PostPagination pageContext={pageContext} />

      <PostComments allCommentsYaml={allCommentsYaml} />
    </article>
  </>
)

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        datePublished: date(formatString: "YYYY-MM-DD")
        date: date(formatString: "DD MMMM YYYY", locale: "fr")
      }
      frontmatter {
        title
        category
      }
    }

    allCommentsYaml (
      filter: { slug: {eq: $slug }}
    ) {
      edges {
        node {
          id
          author
          datePublished: date(formatString: "YYYY-MM-DD HH:mm:ss")
          date: date(formatString: "dddd DD MMMM YYYY à HH:mm", locale: "fr")
          content
        }
      }
    }
  }
`
