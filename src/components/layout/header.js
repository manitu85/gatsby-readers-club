import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import Container from 'components/common/container.styled'
import { FirebaseContext } from 'src/firebase'


const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext)
  // console.log('firebase :>> ', firebase);
  console.log('USER :>> ', user.email);

  return (
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
        <div>
          {
            !user && !user.email &&
            <div>hello, {user.email}</div>
          }
        </div>
      </Container>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledLogoutLink = styled.span`
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;