import headerLogo from '../images/logo-white.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({ isLoggedIn, email, onSignOut }) {
  const location = useLocation();
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип проекта Место"
      />
      <div className="header__menu">
        {location.pathname === '/' && isLoggedIn === true && (
          <p className="header__menu-email">{email}</p>
        )}
        {location.pathname === '/' && isLoggedIn === true && (
          <Link to="/sign-in" className="header__menu-item" onClick={onSignOut}>
            Выйти
          </Link>
        )}
        {location.pathname === '/sign-in' && (
          <Link to="/sign-up" className="header__menu-item">
            Регистрация
          </Link>
        )}
        {location.pathname === '/sign-up' && (
          <Link to="/sign-in" className="header__menu-item">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
