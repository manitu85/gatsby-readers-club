import React, { useContext } from 'react'
import { graphql } from 'gatsby'

import { FirebaseContext } from 'src/firebase'
import { BookItem, BookComments } from 'components/common'


const BookTemplate = ({ data }) => {

  const { firebase } = useContext(FirebaseContext)

  const { id, title, author, summary, localImage } = data.book

  return (
    <section>
      <BookItem
        bookCover={localImage.childImageSharp.fixed}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      />
      {
        !!firebase &&
        <BookComments
          bookId={id}
          firebase={firebase}
        />
      }
    </section>
  )
}

export default BookTemplate

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}) {
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
