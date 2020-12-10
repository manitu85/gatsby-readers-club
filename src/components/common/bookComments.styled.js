import React, { useEffect, useState } from 'react'
// import moment from 'moment'

import styled from 'styled-components'
import { Input, Button } from 'components/common'


const BookComments = ({ firebase, bookId }) => {

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookComments({
      bookId,
      onSnapshot: (snapshot) => {
        console.log(snapshot);
        const snapshotComments = [];
        snapshot.forEach(doc => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setComments(snapshotComments);
      }
    })

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    }
  }, [])

  console.log('COMMENTS: >>', comments);

  return (
    <div>
      <CommentForm >
        <Input
          value={commentText}
          onChange={e => {
            e.persist()
            setCommentText(e.target.value)
          }} />
        <Button type="submit">
          Post comment
        </Button>
      </CommentForm>
      {comments.map(comment => (
        <CommentListItem key={comment.id}>
          <strong>
            {comment.username}
            {/* - {moment(comment.dateCreated.toDate()).format('HH:mm Do MMM YYYY')} */}
          </strong>
          <div>
            {comment.text}
          </div>
        </CommentListItem>
      ))}
    </div>
  )
}

export default BookComments

const CommentForm = styled.form`
  display: flex;
  margin-top: 32px;

  ${Input}{
    margin-right: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${Button}{
    margin: auto 0;
  }
`

const CommentListItem = styled.div`
  >strong{
    font-size: 80%;
    color: #555;
  }

  border-bottom: 1px solid #ddd;
  padding: 4px 0;
`
