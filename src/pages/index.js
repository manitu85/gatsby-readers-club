import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/seo/seo"
import { BookItem } from 'components/common'
import styled from 'styled-components'


const IndexPage = ({ data }) => {

  const books = data.allBooks.edges
  // console.log('data :>> ', books)

  return (
    <Layout>
      <SEO title="Home" />
      {
        books.map(({ node: book }) => (
          <BookItem
            key={book.id}
            bookCover={book.localImage.childImageSharp.fixed}
            authorName={book.author.name}
            bookTitle={book.title}
            bookSummary={book.summary}
          >
            <LinkButton>
              <Link to={`/books/${book.id}`} >
                Join conversation
              </Link>
            </LinkButton>
          </BookItem>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
{
  allBooks {
      edges {
        node {
          id
          title
          summary
          localImage{
            childImageSharp {
              fixed(width: 250, webpQuality: 100){
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage


const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: #500961;
    color: white;
    text-decoration: none;

    &:hover {
        background: #270530;
    }
  }
`