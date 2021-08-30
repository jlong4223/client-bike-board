import { connect } from "react-redux";
import { setProfilePic } from "../../redux/actions";
import { getProfilePic } from "../shared/profilePic";

const OnePic = ({ picture, setProfilePic, userId, currentProfilePic }) => {
  function setNewProfilePic(picture) {
    return removeCurrentProfilePic(currentProfilePic._id).then(() => {
      setProfilePic(userId, picture, { isProfilePic: true });
    });
  }

  function removeCurrentProfilePic(picture) {
    return setProfilePic(userId, picture, { isProfilePic: false });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Pic Clicked</h1>
      <img src={picture.image} alt="clicked" width="400" />
      <button onClick={() => setNewProfilePic(picture._id)}>
        Set as profile Picture
      </button>
      <button>Delete</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const matchedPic = state.userInfo.pics.filter(
    (pic) => pic._id === ownProps.match.params.picid
  );

  const profilePic = getProfilePic(state);

  return {
    picture: matchedPic[0],
    userId: state.userInfo.user.user_id,
    currentProfilePic: profilePic,
  };
};

export default connect(mapStateToProps, { setProfilePic })(OnePic);
