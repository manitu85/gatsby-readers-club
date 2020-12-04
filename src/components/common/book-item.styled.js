import React from 'react'
import styled from 'styled-components'


const BookItem = ({ authorName, bookTitle, bookSummary, children }) => (
  <BookItemWrapper>
    <h2>
      {bookTitle}   - <small>{authorName}</small>
    </h2>
    <p>{bookSummary}</p>
    {children}
  </BookItemWrapper>
)

export default BookItem

const BookItemWrapper = styled.section`
  border: 2px solid #e1e1e1;
  padding: 2rem;
  margin-bottom: 10px;

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