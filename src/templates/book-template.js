import React from 'react'
import Layout from 'components/layout/layout'
import { graphql } from 'gatsby'

import { BookItem } from 'components/common'


const BookTemplate = ({ data }) => {
  console.log(data)

  // console.log('pageContext :>> ', pageContext);
  const { title, author, summary, localImage } = data.books

  return (
    <Layout>
      <BookItem
        bookCover={localImage.childImageSharp.fixed}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      >
      </BookItem>
    </Layout>
  )
}

export default BookTemplate

export const query = graphql`
  query BookQuery($bookId: String!) {
    books(id: {eq: $bookId}) {
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
`