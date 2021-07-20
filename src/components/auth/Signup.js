import { connect } from "react-redux";
import AuthForm from "./AuthForm";

import { registerUser } from "../../redux/actions/";

const Signup = ({ registerUser }) => {
  const fieldNames = ["Name", "Email", "Password"];

  const onSubmitForm = (values) => {
    registerUser(values);
  };

  return (
    <div>
      <h1>Signup</h1>
      <AuthForm fieldNames={fieldNames} onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default connect(null, { registerUser })(Signup);
