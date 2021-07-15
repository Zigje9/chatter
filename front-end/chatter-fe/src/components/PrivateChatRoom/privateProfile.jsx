import React from 'react';
import styled from 'styled-components';
import { getProfile } from '../../utils/getProfile';

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-left: 5px;
`;

const PrivateProfile = ({ ...props }) => {
  return <Profile src={getProfile(props.userProfile)}></Profile>;
};

export default PrivateProfile;
