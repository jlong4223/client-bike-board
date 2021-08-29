import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getUsersPics } from "../redux/actions";
import { getProfilePic } from "./shared/profilePic";

const Header = ({ userInfo, logout, profilePic, getUsersPics }) => {
  const isSignedIn = userInfo.isSignedIn;

  useEffect(() => {
    isSignedIn && getUsersPics(userInfo.user.user_id);
  }, [isSignedIn, getUsersPics, userInfo.user.user_id]);

  const styles = headerStyles();

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.headerLink}>
        BikeBoard
      </Link>
      {isSignedIn ? (
        <div style={styles.authLinks}>
          <Link to="" onClick={() => logout()} style={styles.normalLink}>
            Logout
          </Link>
          <Link to="/dashboard" style={styles.normalLink}>
            Dashboard
          </Link>
          <Link to={`/profile/${userInfo.user.name}`} style={styles.normalLink}>
            Hi, {userInfo.user.name}
          </Link>
          {/* TODO idea- onclick brings up the images only if the user has images, and it first sets the image clicked to false and then changes the image that the user selects as an image */}
          <img style={styles.image} src={profilePic} alt="profileImg" />
        </div>
      ) : (
        <div style={styles.authLinks}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  const getUserPic = getProfilePic(state);

  return {
    userInfo: state.userInfo,
    profilePic: getUserPic.image,
  };
};

export default connect(mapStateToProps, { logout, getUsersPics })(Header);

const headerStyles = () => {
  return {
    header: {
      display: "flex",
      justifyContent: "space-around",
      borderBottom: "1px solid #ccc",
    },
    headerLink: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
      fontSize: "40px",
      margin: "10px",
    },
    normalLink: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
    },
    authLinks: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "30%",
    },
    image: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
  };
};
