import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  editUserDetails,
  getDetails,
  updatePic,
  getUsersPics,
} from "../../redux/actions";
import map from "lodash/map";

import DetailsForm from "./DetailsForm";
import PicsForm from "./PicsForm";

const Profile = ({
  userName,
  detailsId,
  editUserDetails,
  userInfo,
  user_details,
  pics,
  getDetails,
  updatePic,
  getUsersPics,
}) => {
  const [editState, setIsEditState] = useState(false);
  const [picState, setPicState] = useState();

  const styles = getStyles();
  const mappedPics = mapUserPics(pics, styles, userName);

  useEffect(() => {
    getDetails(detailsId);
    getUsersPics(userInfo.user_id);
  }, [getDetails, detailsId, getUsersPics, userInfo.user_id]);

  const postForm = async (formValues) => {
    await editUserDetails(detailsId, formValues);
    setIsEditState(false);
  };

  async function postPicture(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userID", userInfo.user_id);
    formData.append("application", "client-bikeboard");
    formData.append("image", picState);

    try {
      updatePic(formData);
      setPicState(undefined);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleChange(e) {
    setPicState(e.target.files[0]);
  }

  const openEditForm = () => {
    setIsEditState(!editState);
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <div>
          {editState ? (
            <>
              <DetailsForm
                detailsId={detailsId}
                postForm={postForm}
                initialValues={user_details}
              />
              <button onClick={() => openEditForm()}>Cancel</button>
            </>
          ) : (
            <>
              <h1>Hi, {userName}</h1>
              <p>Here is your address: {user_details.address}</p>
              <p>Your bike count: {user_details.bike_count}</p>
              <p>Your Bio: {user_details.bio}</p>
              <p>Your Phone Number: {user_details.phone_number}</p>
              <p>Your zip code: {user_details.zip_code}</p>
              <button onClick={() => openEditForm()}>Edit your Details</button>
            </>
          )}
          {/* TODO add another form for posting new details */}
        </div>
      </div>
      <div style={styles.picsContainer}>
        <div style={styles.picsDiv}>
          <p>Your pictures:</p>
          <PicsForm
            handleChange={handleChange}
            postPicture={postPicture}
            picState={picState}
          />
          {mappedPics}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userName: ownProps.match.params.name,
    user_id: state.userInfo.user.user_id,
    userInfo: state.userInfo.user,
    detailsId: state.userInfo.user.details_id,
    user_details: state.userInfo.details,
    pics: state.userInfo.pics,
  };
};

export default connect(mapStateToProps, {
  editUserDetails,
  getDetails,
  updatePic,
  getUsersPics,
})(Profile);

function getStyles() {
  return {
    container: {
      display: "flex",
      border: "1px solid #ccc",
    },
    profileContainer: {
      width: "60%",
      margin: "10px",
      // border: "1px solid #000",
    },
    picsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "40%",
      // border: "1px solid red",
    },
    picsDiv: {
      // height: "60vh",
    },
    image: {
      margin: "3px",
    },
  };
}

function mapUserPics(pics, styles, userName) {
  return map(pics, (pic, i) => (
    <Link key={i} to={`/profile/${userName}/${pic._id}`}>
      <img
        style={styles.image}
        src={pic.image}
        alt="user_pic"
        key={pic._id}
        height="100"
      />
    </Link>
  ));
}
