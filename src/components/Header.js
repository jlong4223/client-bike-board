import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const Header = ({ userInfo, logout, profilePic }) => {
  const styles = headerStyles();

  const isSignedIn = userInfo.isSignedIn;

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
          {/* TODO idea- onclick brings up the images, and it first sets the image clicked to false and then changes the image that the user selects as an image */}
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
  const getProfilePic =
    state.userInfo.pics.length > 0
      ? state.userInfo.pics.filter((pic) => pic.isProfilePic === true)[0].image
      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  return {
    userInfo: state.userInfo,
    profilePic: getProfilePic,
  };
};

export default connect(mapStateToProps, { logout })(Header);

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
