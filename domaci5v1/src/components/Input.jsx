const Input = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required />
        <br />
        <br />
        <input type="text" name="lastName" required />
        <br />
        <br />
        <input type="number" name="year" required />
        <br />
        <br />
        <input type="submit" value="Submit" required />
      </form>
    </>
  );
};

export default Input;
