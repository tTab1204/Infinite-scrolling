import styled from 'styled-components';

export const InfiniteScrollContainer = styled.div`
  min-height: 100vh;
`;

export const CommentContainer = styled.div`
  width: 500px;
  height: 193px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #f8f9fa;
  margin: 20px auto;
  border: 0.5px solid #ced4da;
  overflow: hidden;
  padding: 20px;
  color: #212529;
`;

export const CommentBox = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 0;

  & > div {
    font-weight: 600;
  }

  & > span {
    margin-left: 12px;
  }
`;

export const CommentDetail = styled.div`
  font-size: 18px;
  line-height: 21px;
  padding-top: 12px;

  & > div {
    font-weight: 600;
  }

  & > p {
    margin-block-start: 2px;
  }
`;
