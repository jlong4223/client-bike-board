import AuthForm from "./AuthForm";

const Login = () => {
  const fieldNames = ["Email", "Password"];

  return (
    <div>
      <h1>Login</h1>
      <AuthForm fieldNames={fieldNames} />
    </div>
  );
};

export default Login;
