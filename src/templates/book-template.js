import React from 'react'
import Layout from 'components/layout'

import { BookItem } from 'components/common'


const BookTemplate = ({ pageContext }) => {

  // console.log('pageContext :>> ', pageContext);
  const { title, author, summary } = pageContext

  return (
    <Layout>
      <BookItem>
        <h2>
          {title} - <small>{author.name}</small>
        </h2>
        <p>{summary}</p>
      </BookItem>
    </Layout>
  )
}

export default BookTemplate
