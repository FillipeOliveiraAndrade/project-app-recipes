import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DRINKS_TOKEN_KEY, MEALS_TOKEN_KEY, USER_KEY } from '../utils/globalVariables';
import '../styles/Login.css';

const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const history = useHistory();

  const [input, setInput] = useState({ email: '', password: '' });

  const validateForm = () => {
    const { email, password } = input;
    const validateEmail = email.match(/\S+@\S+\.\S+/);
    const validatePassword = password.length > MIN_PASSWORD_LENGTH;
    return !(validateEmail && validatePassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USER_KEY, JSON.stringify({ email: input.email }));
    localStorage.setItem(MEALS_TOKEN_KEY, 1);
    localStorage.setItem(DRINKS_TOKEN_KEY, 1);
    history.push('/meals');
  };

  useEffect(() => {
    validateForm();
  });

  return (
    <form
      onSubmit={ handleSubmit }
      className="loginForm"
    >
      <section className="loginContainer">
        <h1 className="titles">Log in</h1>
        <label htmlFor="email-input">
          <input
            type="email"
            name="email"
            onChange={ handleChange }
            data-testid="email-input"
            value={ input.email }
            id="email-input"
            className="textInputLogin"
            placeholder="e-mail"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            name="password"
            onChange={ handleChange }
            data-testid="password-input"
            value={ input.password }
            id="password-input"
            className="textInputLogin"
            placeholder="password"
          />
        </label>
        <button
          disabled={ validateForm() }
          data-testid="login-submit-btn"
          type="submit"
          className="loginButton"
        >
          Enter
        </button>
      </section>
    </form>
  );
}
// ;
export default Login;
