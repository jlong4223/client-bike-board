export const renderErr = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div>
        <div>{error}</div>
      </div>
    );
  }
};

export const renderInput = ({ input, placeholder, label, meta, type }) => {
  // console.log("meta: ", meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {renderErr(meta)}
    </div>
  );
};
