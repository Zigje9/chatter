import React from 'react';
import styled from 'styled-components';

const MsgContent = styled.div`
  position: relative;
  color: white;
  height: 40px;
  padding: 13px;
  background: #9ac5ff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  font-size: 12px;
  right: 10px;
  margin: 3px 0;
  text-overflow: ellipsis;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent #9ac5ff;
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
