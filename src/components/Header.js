import headerLogo from '../images/logo-white.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип проекта Место" />
    </header>
  );
}

export default Header;
