import React, { useState, useEffect, useRef } from 'react';
import {
  CommentContainer,
  CommentBox,
  InfiniteScrollContainer,
  CommentDetail,
} from './InfiniteScrollListStyle';

function InfiniteScrollList() {
  const [comments, setComments] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchComments = async (pageNumber) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`,
    );
    const data = await res.json();
    setComments((p) => [...p, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchComments(pageNumber);
  }, [pageNumber]);

  const pageEnd = useRef();

  let num = 1;

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= 50) observer.unobserve(pageEnd.current);
          }
        },
        { threshold: 1 },
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, num]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <InfiniteScrollContainer>
      {comments.map((comment, index) => (
        <CommentContainer key={index}>
          <CommentBox>
            <div>Comment Id</div>
            <span>{comment.id}</span>
          </CommentBox>
          <CommentBox>
            <div>Email</div>
            <span>{comment.email}</span>
          </CommentBox>
          <CommentDetail>
            <div>Comment</div>
            <p>{comment.body}</p>
          </CommentDetail>
        </CommentContainer>
      ))}
      <div ref={pageEnd}></div>
    </InfiniteScrollContainer>
  );
}

export default InfiniteScrollList;
