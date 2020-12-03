import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  const books = data.allBooks.edges
  // console.log('data :>> ', books)

  return (
    <Layout>
      <SEO title="Home" />
      {
        books.map(({ node: book }) => (
          <div key={book.id}>
            <h1>{book.title} - <small>{book.author.name}</small> </h1>
            <p>{book.summary}</p>
            <Link to={`/books/${book.id}`} >
              Join conversation
            </Link>
          </div>
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
