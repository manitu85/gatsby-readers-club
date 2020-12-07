import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Container } from 'components/common'
import { FirebaseContext, useAuth } from 'src/firebase'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {

  const { user, firebase, loading } = useAuth()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }} >
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
