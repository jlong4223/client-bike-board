import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const Header = ({ userInfo, logout }) => {
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
          <img
            style={styles.image}
            src="https://avatars.githubusercontent.com/u/71945780?v=4"
            alt="profileImg"
          />
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
  return {
    userInfo: state.userInfo,
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
