import { connect } from "react-redux";
import AuthForm from "./AuthForm";

import { getUserFromDB } from "../../redux/actions";
import { loginFields } from "./AuthFields";

const Login = ({ getUserFromDB }) => {
  const onSubmitForm = (values) => {
    getUserFromDB(values);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm fieldNames={loginFields} onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default connect(null, { getUserFromDB })(Login);
