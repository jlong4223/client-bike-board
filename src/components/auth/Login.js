import { connect } from "react-redux";
import { getUserFromDB } from "../../redux/actions";

import AuthForm from "./AuthForm";

const Login = ({ getUserFromDB }) => {
  const fieldNames = ["Email", "Password"];

  const onSubmitForm = (values) => {
    getUserFromDB(values);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm fieldNames={fieldNames} onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default connect(null, { getUserFromDB })(Login);
