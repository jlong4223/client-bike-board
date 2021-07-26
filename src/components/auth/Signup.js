import { connect } from "react-redux";
import AuthForm from "./AuthForm";

import { registerUser } from "../../redux/actions/";
import { registerFields } from "./AuthFields";

const Signup = ({ registerUser }) => {
  const onSubmitForm = (values) => {
    registerUser(values);
  };

  return (
    <div>
      <h1>Signup</h1>
      <AuthForm fieldNames={registerFields} onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default connect(null, { registerUser })(Signup);
