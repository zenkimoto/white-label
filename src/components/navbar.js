import logo from '@client/logo.svg';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand ms-4">
        <img src={logo} height="30" alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
