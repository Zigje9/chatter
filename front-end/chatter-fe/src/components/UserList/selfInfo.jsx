import React from 'react';
import styled from 'styled-components';
import SelfCardContainer from '../Common/container';
import { useSelector } from 'react-redux';
import { getProfile } from '../../utils/getProfile';
import { LogOutCircle } from '@styled-icons/boxicons-regular/LogOutCircle';
import { logout } from '../../actions/user';
import { selfLogout } from '../../actions/socket';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const SelfProfile = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

const SelfCard = styled.div`
  color: #32415a;
  font-weight: bold;
  font-size: 20px;
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SelfId = styled.span``;

const LogOutIcon = styled(LogOutCircle)`
  width: 25px;
  color: gray;
  cursor: pointer;
`;

const SelfInfo = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      Cookies.remove('sid');
      dispatch(selfLogout());
      dispatch(logout());
    } else {
      console.log('no');
    }
  };

  const userInfo = useSelector((state) => state.user);
  const { userName, userProfile, userId } = userInfo;
  return (
    <SelfCardContainer
      styles={{
        flexDirection: 'column',
        width: '80%',
        height: '150px',
        margin: '0 auto 0 auto',
        borderRadius: '5px',
        bgColor: 'white',
        boxShadow: '3px 3px 2px #e7ebf1;',
      }}
    >
      <SelfProfile src={getProfile(userProfile)} />
      <SelfCard>
        <SelfId>
          {userId}({userName})
        </SelfId>
        <LogOutIcon onClick={() => logoutHandler()}></LogOutIcon>
      </SelfCard>
    </SelfCardContainer>
  );
};

export default SelfInfo;
