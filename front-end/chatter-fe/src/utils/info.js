const alertInfo = (info) => {
  console.log(info);
  const { isLogin, userId, userName } = info;
  console.log(isLogin, userId, userName);
  alert(
    `\n\n${userName}(${userId})님 과의 채팅방\n ${
      isLogin ? `${userName}님은 접속중입니다.` : `${userName}님은 접속중이 아닙니다.`
    }`,
  );
};

export default alertInfo;
