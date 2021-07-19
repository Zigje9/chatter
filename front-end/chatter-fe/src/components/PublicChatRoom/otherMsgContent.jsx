import React from 'react';
import styled from 'styled-components';
import getProfileColor from '../../assets/getProfileColor';

const MsgContent = styled.div`
  position: relative;
  height: 40px;
  padding: 13px;
  font-size: 13px;
  background-color: ${(props) => props.userColor};
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  left: 5px;
  margin: 3px 0;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 10px 5px 0;
    border-color: transparent ${(props) => props.userColor};
    display: block;
    width: 0;
    z-index: 1;
    left: -10px;
    top: 16px;
  }
`;

const OtherMsgContent = ({ children, ...props }) => {
  return <MsgContent userColor={getProfileColor(props.userIdx)}>{children}</MsgContent>;
};

export default OtherMsgContent;
