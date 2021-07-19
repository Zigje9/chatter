import React from 'react';
import styled from 'styled-components';

const MsgContent = styled.div`
  position: relative;
  color: white;
  height: 40px;
  padding: 13px;
  font-size: 13px;
  background: #4286f5;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  right: 10px;
  margin: 3px 0;
  text-overflow: ellipsis;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent #4286f5;
    display: block;
    width: 0;
    z-index: 1;
    right: -10px;
    top: 16px;
  }
`;

const SelfMsgContent = ({ children }) => {
  return <MsgContent>{children}</MsgContent>;
};

export default SelfMsgContent;
