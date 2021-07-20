import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const Header = ({ userInfo, logout }) => {
  const styles = headerStyles();

  const isSignedIn = userInfo.isSignedIn;

  return (
    <header style={styles.header}>
      <h1>Client BikeBoard</h1>
      {isSignedIn ? (
        <div style={styles.authLinks}>
          <p>Hi, {userInfo.user.name}</p>
          <Link to="" onClick={() => logout()}>
            Logout
          </Link>
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
    },
    authLinks: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "10%",
    },
  };
};
