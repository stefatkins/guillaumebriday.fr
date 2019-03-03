import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import ScrollIndicator from "../components/ScrollIndicator"

const Layout = ({ children, location, pageContext }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: site.siteMetadata.description,
          }
        ]}
      >
        <html lang="fr" />
      </Helmet>

      <div className="flex flex-col min-h-screen font-sans leading-normal">
        {pageContext.isBlog && <ScrollIndicator />}

        <Header isBlog={pageContext.isBlog} />

        <PageTransition location={location}>
          <main className="pb-4">
            {children}
          </main>
        </PageTransition>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
