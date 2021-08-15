import { useState, useEffect } from "react";
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
    <div>
      <div>
        <div>
          <h1>Hi, {userName}</h1>
          <p>Here is your address: {user_details.address}</p>
          <p>Your bike count: {user_details.bike_count}</p>
          <p>Your Bio: {user_details.bio}</p>
          <p>Your Phone Number: {user_details.phone_number}</p>
          <p>Your zip code: {user_details.zip_code}</p>
        </div>
      </div>
      <div>
        <p>Your pictures:</p>
        <div>
          {map(pics, (pic) => {
            return (
              <img src={pic.image} alt="user_pic" key={pic._id} height="100" />
            );
          })}
        </div>
        <PicsForm
          handleChange={handleChange}
          postPicture={postPicture}
          picState={picState}
        />
        <button onClick={() => openEditForm()}>Edit your Details</button>
        {/* TODO fix the edit to take the place of the details when opened */}
        {editState && (
          <DetailsForm
            detailsId={detailsId}
            postForm={postForm}
            initialValues={user_details}
          />
        )}
        {/* TODO add another form for posting new details */}
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
