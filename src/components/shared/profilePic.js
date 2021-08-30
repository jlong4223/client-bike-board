export const getProfilePic = (state) => {
  return state.userInfo.pics.length > 0
    ? state.userInfo.pics.filter((pic) => pic.isProfilePic === true)[0]
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
};
