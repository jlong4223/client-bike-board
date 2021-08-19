import { connect } from "react-redux";
import { setProfilePic } from "../../redux/actions/profilePic";

const OnePic = ({ picture, setProfilePic, userId }) => {
  function setNewProfilePic(picture) {
    console.log(picture);
    // TODO figure out how to set all others to false
    return setProfilePic(userId, picture, { isProfilePic: true });
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

  return {
    picture: matchedPic[0],
    userId: state.userInfo.user.user_id,
  };
};

export default connect(mapStateToProps, { setProfilePic })(OnePic);
