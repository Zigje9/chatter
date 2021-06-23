import React from 'react';
import styled from 'styled-components';

const SelfCard = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
  margin-top: 10px;
`;

const SelfInfo = () => {
  return (
    <SelfCard>
      <h3>안녕</h3>
    </SelfCard>
  );
};

export default SelfInfo;
