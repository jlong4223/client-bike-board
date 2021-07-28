import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editUserDetails, getDetails } from "../../redux/actions";

import DetailsForm from "./DetailsForm";

const Profile = ({
  userName,
  detailsId,
  editUserDetails,
  userInfo,
  user_details,
  getDetails,
}) => {
  const [editState, setIsEditState] = useState(false);

  useEffect(() => {
    getDetails(detailsId);
  }, [getDetails, detailsId]);

  const postForm = async (formValues) => {
    console.log("formValues: ", formValues);
    // userDetails !== undefined than do the edit else create new
    await editUserDetails(detailsId, formValues);
    setIsEditState(false);
  };

  const openEditForm = () => {
    setIsEditState(!editState);
  };

  //   if there no user details, then show do a post instead of patch
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Hi, {userName}</p>
      <p>Your email: {userInfo.email}</p>
      <p>Here is your address: {user_details.address}</p>
      <p>Change your profile Pic</p>
      <p>Your bike count: {user_details.bike_count}</p>
      <p>Add a description</p>
      <button onClick={() => openEditForm()}>Edit your Details</button>
      {editState && (
        <DetailsForm
          detailsId={detailsId}
          postForm={postForm}
          initialValues={user_details}
        />
      )}
      {/* TODO add another form for posting new details */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userInfo.user.name,
    user_id: state.userInfo.user.user_id,
    userInfo: state.userInfo.user,
    detailsId: state.userInfo.user.details_id,
    user_details: state.userInfo.details,
  };
};

export default connect(mapStateToProps, {
  editUserDetails,
  getDetails,
})(Profile);
