import { Link } from "react-router-dom";

const Header = () => {
  const styles = headerStyles();
  return (
    <header style={styles.header}>
      <h1>Client BikeBoard</h1>
      <div style={styles.authLinks}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;

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
