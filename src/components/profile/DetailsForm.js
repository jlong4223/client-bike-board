import { Field, reduxForm } from "redux-form";
import map from "lodash/map";
import { renderInput } from "../shared/formInput";
import { fields } from "./ProfileFields";

const DetailsForm = ({ handleSubmit, postForm }) => {
  const renderFields = () =>
    map(fields, (field) => (
      <Field
        component={renderInput}
        name={field.name}
        key={field.name}
        type={field.type}
        label={field.label}
        placeholder={field.placeholder}
      />
    ));

  const sendTheForm = (values) => {
    // console.log(values);
    postForm(values);
  };

  return (
    <div>
      <h1>Edit your profile details</h1>
      <form onSubmit={handleSubmit(sendTheForm)}>
        {renderFields()}
        <button>Submit Changes</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  //   console.log("values: ", formValues);
  const errors = {};
  if (!formValues.address) {
    errors.address = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "DetailsForm",
  validate,
})(DetailsForm);
