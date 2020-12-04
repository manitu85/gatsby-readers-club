import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from 'components/common/container.styled'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#500961`,
      marginBottom: `1.45rem`,
      padding: `1rem 0`
    }}
  >
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
