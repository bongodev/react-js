import PropTypes from 'prop-types';

function FormInput({ label, name, type, handleOnChange }) {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input name={name} type={type} onChange={handleOnChange} />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'email',
};

export default FormInput;
