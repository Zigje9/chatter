import * as type from '../actions/type';

const initialState = { members: [] };

const userList = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        members: action.payload,
      };
    case type.CHANGE_ALL_USER_ONLINE:
      const onUserInfo = Object.values(action.payload);
      const onMembers = [...state.members];
      const tempMember = {};
      const tempOnUser = {};

      onMembers.forEach((ob) => {
        tempMember[ob.userId] = ob;
      });
      onUserInfo.forEach((ob) => {
        tempOnUser[ob.userId] = ob;
      });

      const changeMembers = onMembers.map((ob) => {
        if (ob.userId in tempOnUser) {
          return {
            userId: ob.userId,
            isLogin: true,
            userName: ob.userName,
            userProfile: ob.userProfile,
          };
        } else {
          return {
            userId: ob.userId,
            isLogin: false,
            userName: ob.userName,
            userProfile: ob.userProfile,
          };
        }
      });

      onUserInfo.forEach((ob) => {
        if (!(ob.userId in tempMember)) {
          changeMembers.push({
            userId: ob.userId,
            isLogin: true,
            userName: ob.userName,
            userProfile: ob.userProfile,
          });
        }
      });
      return {
        members: changeMembers,
      };
    default:
      return state;
  }
};

export default userList;
