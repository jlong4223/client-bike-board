import { Field, reduxForm } from "redux-form";
import map from "lodash/map";

const AuthForm = ({ handleSubmit, fieldNames, onSubmitForm }) => {
  const renderErr = ({ error, touched }) => {
    if (touched && error) {
      console.log(error);
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, meta, label, type }) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type || "text"} {...input} />
        {renderErr(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    onSubmitForm(formValues);
  };

  const createFields = () =>
    map(fieldNames, (fieldName) => (
      <Field
        name={fieldName}
        component={renderInput}
        label={fieldName}
        key={fieldName}
      />
    ));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.Name) {
    errors.Name = "Please enter your name";
  }

  if (!formValues.Email) {
    errors.Email = "Please enter an email";
  }

  if (!formValues.Password) {
    errors.Password = "Please enter a password";
  }

  return errors;
};

export default reduxForm({ form: "AuthForm", validate })(AuthForm);
