import React from 'react';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form">
        <input
          type="email"
          className="auth__input"
          id="email"
          name="email"
          placeholder="Email"
          required
          minLength="8"
          maxLength="40"
          value={email || ''}
        />
        <span className="auth__input-error auth-error" />
        <input
          type="password"
          className="auth__input"
          id="password"
          name="password"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="30"
          value={password || ''}
        />
        <span className="auth__input-error auth-error" />
        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
