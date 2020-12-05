import React from 'react'
import Layout from 'components/layout/layout'

import { BookItem } from 'components/common'


const BookTemplate = ({ pageContext }) => {

  // console.log('pageContext :>> ', pageContext);
  const { title, author, summary, imageUrl } = pageContext

  return (
    <Layout>
      <BookItem
        bookCover={imageUrl}
        authorName={author.name}
        bookTitle={title}
        bookSummary={summary}
      >
      </BookItem>
    </Layout>
  )
}

export default BookTemplate
