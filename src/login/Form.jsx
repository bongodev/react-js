import PropTypes from 'prop-types';

function Form({ formInputChildren, handleLogin }) {
  return (
    <form className="loginForm" onSubmit={handleLogin}>
      {formInputChildren}
      <div className="formInput">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
}

Form.propTypes = {
  formInputChildren: PropTypes.array.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Form;
