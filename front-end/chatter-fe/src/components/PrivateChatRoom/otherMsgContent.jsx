import React from 'react';
import styled from 'styled-components';

const MsgContent = styled.div`
  position: relative;
  height: 40px;
  padding: 13px;
  background: pink;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  font-size: 12px;
  left: 10px;
  margin: 3px 0;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 10px 5px 0;
    border-color: transparent pink;
    display: block;
    width: 0;
    z-index: 1;
    left: -10px;
    top: 16px;
  }
`;

const OtherMsgContent = ({ children }) => {
  return <MsgContent>{children}</MsgContent>;
};

export default OtherMsgContent;
