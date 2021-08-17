import { connect } from "react-redux";

const OnePic = ({ picture }) => {
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
      <button>Set as profile Picture</button>
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
  };
};

export default connect(mapStateToProps)(OnePic);
