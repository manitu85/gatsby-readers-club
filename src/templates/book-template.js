import React from 'react'
import { graphql } from 'gatsby'

import { BookItem } from 'components/common'


const BookTemplate = ({ data }) => {

  // console.log(data)
  // console.log('pageContext :>> ', pageContext);
  const { title, author, summary, localImage } = data.book

  return (
    <section>
      <BookItem
        bookCover={localImage.childImageSharp.fixed}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      >
      </BookItem>
    </section>
  )
}

export default BookTemplate

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}) {
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
