import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import { BookItem } from 'components/common'


const IndexPage = ({ data }) => {

  const books = data.allBooks.edges
  // console.log('data :>> ', books)

  return (
    <Layout>
      <SEO title="Home" />
      {
        books.map(({ node: book }) => (
          <BookItem key={book.id}>
            <h1>{book.title} - <small>{book.author.name}</small> </h1>
            <p>{book.summary}</p>
            <Link to={`/books/${book.id}`} >
              Join conversation
            </Link>
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
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
