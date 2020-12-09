import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { FirebaseContext } from 'src/firebase'


const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext)
  // console.log('firebase :>> ', firebase);
  console.log('USER :>> ', user);
  console.log('FIREBASE :>> ', firebase);

  const handleLogout = () => {
    firebase.logout()
      .then(() => navigate('/login'))
  }
  // .then(() => navigate('/'))

  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{ color: `white`, textDecoration: `none` }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          {!!user && !!user.email &&
            <UserInfo>
              Hello, {user.username || user.email}
              <div>
                <LogoutLink onClick={handleLogout}>
                  Logout
                </LogoutLink>
              </div>
            </UserInfo>
          }
          {(!user || !user.email) &&
            <>
              <LoginLink to="/login">
                Login
              </LoginLink>
              <Divider />
              <RegisterLink to="/register">
                Register
              </RegisterLink>
            </>
          }
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



const LogoutLink = styled.span`
  color: white;
  text-decoration: none;
  cursor:pointer;

  &:hover{
    text-decoration: underline;
  }
`

const LoginLink = styled(Link)`
  color:white;
  margin: auto 0;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }

`

const RegisterLink = styled(Link)`
  color: white;
  cursor:pointer;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.header`
  background: #553399;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;

  >h1{
    margin: 0;
    flex-grow:1;

    >a{
      color: white;
      text-decoration: none;
    }

  }
  >div{
      margin: auto 0;
    }
`

const UserInfo = styled.div`
  text-align: right;
  color: white;
`

const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background: #ddd;
`

const AdminLink = styled.span`
  a{
    color: white;
  }
`
