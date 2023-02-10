import { useState } from 'react';

import Form from './Form';
import FormInput from './FormInput';
import { authenticate } from './LoginServices';

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

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      authenticate(credential);
      // redirect
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <Form
        handleLogin={handleLogin}
        formInputChildren={[
          <FormInput
            key={1}
            label="User Id"
            name="email"
            handleOnChange={handleOnChange}
          />,
          <FormInput
            key={2}
            label="Password"
            name="password"
            type="password"
            handleOnChange={handleOnChange}
          />,
        ]}
      />
    </div>
  );
}

export default Login;
