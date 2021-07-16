import React from 'react';
import styled from 'styled-components';

const FullInfo = styled.div`
  font-size: 1px;
  display: none;
`;

const Box = styled.div`
  padding: 8px;
  margin-top: 15px;
  margin-right: ${(props) => (props.right ? '5px' : '')};
  &:hover ${FullInfo} {
    display: block;
  }
`;

const Time = styled.span`
  font-size: 1px;
  vertical-align: bottom;
  color: gray;
`;

const DateBox = ({ ...props }) => {
  const newDate = new Date(props.date);
  return (
    <Box {...props}>
      <Time>
        {newDate.getHours()}:{newDate.getMinutes()}
      </Time>
      <FullInfo>
        {newDate.getFullYear()}년 {newDate.getMonth() + 1}월 {newDate.getDate()}일
      </FullInfo>
    </Box>
  );
};

export default DateBox;
