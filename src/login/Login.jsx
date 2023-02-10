import { useState } from 'react';
import './Login.css';

function Login() {
  const [credential, setCrdential] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    const update = {
      [event.target.name]: event.target.value,
    };
    setCrdential({ ...credential, ...update });
  };

  return (
    <div className="login">
      <form className="loginForm">
        <div className="formInput">
          <label>User ID</label>
          <input name="email" type="email" onChange={handleOnChange} />
        </div>

        <div className="formInput">
          <label>Password</label>
          <input name="password" type="password" onChange={handleOnChange} />
        </div>

        <div className="formInput">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
