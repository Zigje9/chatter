const getNowConnectedUser = (members) => {
  return members.reduce((acc, member) => {
    return member.isLogin ? acc + 1 : acc;
  }, 0);
};

export default getNowConnectedUser;
