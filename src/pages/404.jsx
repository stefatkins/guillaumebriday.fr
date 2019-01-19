import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data: { site } }) => (
  <>
    <Helmet
      title={`Oups ! La page est introuvable… | ${site.siteMetadata.title}`}
    />

    <h1>Oups ! La page est introuvable…</h1>
    <p>La page que vous cherchez n'est plus disponible ou a été déplacée !</p>
  </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
