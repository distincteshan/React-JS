const Submit = ({ children, handleOnClick }) => {
  return (
    <button className="button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Submit;
