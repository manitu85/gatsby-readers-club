import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Container } from 'components/common'

import Header from './header'

const Layout = ({ children }) => {
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
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Container>
        <main>{children}</main>
        <footer style={{ marginTop: `2rem` }}>
          © {new Date().getFullYear()}, Built with{` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
