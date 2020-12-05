import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'


const BookItem = ({ bookCover, authorName, bookTitle, bookSummary, children }) => (
  <BookItemWrapper>
    <BookItemImage>
      <Img fixed={bookCover} alt='book' />
    </BookItemImage>
    <BookItemContent>
      <h2>
        {bookTitle} - <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      {children}
    </BookItemContent>
  </BookItemWrapper>
)

export default BookItem

const BookItemWrapper = styled.section`
  border: 2px solid #e1e1e1;
  padding: 2rem;
  margin-bottom: 10px;

  display: flex;

  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
    color: #461354;

    small {
      font-style: italic;
      padding-left: 8px;
      font-size: .8rem;
    }
  }

`;

const BookItemImage = styled.div`
  width: 250px;
  img {
    display: block;
    max-width: 100%;
  }
`

const BookItemContent = styled.div`
  padding-left: 2rem;
  flex: 1;
`