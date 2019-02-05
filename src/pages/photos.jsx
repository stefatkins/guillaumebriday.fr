import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({
  data: {
    site,
    allFile
  }
}) => (
  <>
    <Helmet title={`Photos | ${site.siteMetadata.title}`} />

    <h1 className="text-4xl">Photos</h1>

    <p className="font-light text-grey-darker text-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, tenetur enim hic cum ex ad nemo quam placeat voluptas quod, soluta fugiat eum iste deserunt dolore consequatur culpa totam laborum.
    </p>

    <div className="md:overflow-x-scroll md:whitespace-no-wrap">
      {allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid} className="mb-4" />
      ))}
    </div>
  </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    allFile(
      filter: { absolutePath: {regex : "\/gallery/"} }
      sort: { fields: [absolutePath], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
