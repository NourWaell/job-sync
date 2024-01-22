const FormRow = ({ type, name, value, handleChange, labelText, isLoading }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={handleChange}
        disabled={isLoading}
      />
    </div>
  );
};
export default FormRow;
