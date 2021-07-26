import { Field, reduxForm } from "redux-form";
import map from "lodash/map";
import { renderInput } from "../shared/formInput";

const AuthForm = ({ handleSubmit, fieldNames, onSubmitForm }) => {
  const onSubmit = (formValues) => {
    onSubmitForm(formValues);
  };

  const createFields = () =>
    map(fieldNames, (fieldName) => (
      <Field
        name={fieldName.name}
        component={renderInput}
        label={fieldName.label}
        key={fieldName.name}
        type={fieldName.type}
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
  if (!formValues.name) {
    errors.name = "Please enter your name";
  }

  if (!formValues.email) {
    errors.email = "Please enter an email";
  }

  if (!formValues.password) {
    errors.password = "Please enter a password";
  }

  return errors;
};

export default reduxForm({ form: "AuthForm", validate })(AuthForm);
