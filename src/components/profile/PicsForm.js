const PicsForm = ({ postPicture, handleChange, picState }) => {
  return (
    <form onSubmit={postPicture}>
      <input type="file" onChange={handleChange} />
      <button disabled={!picState}>Upload Image</button>
    </form>
  );
};

export default PicsForm;
