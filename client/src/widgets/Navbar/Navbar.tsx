import React from 'react';
import { Link } from 'react-router';
import { useAppDispatch } from '../../shared/api/lib/hooks';
import { logout } from '../../features/auth/model/redux/authThunk';

export default function Navbar(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    void dispatch(logout());
  };
  return (
    <nav className="nav">
      <div className="nav__links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="nav__buttons">
        <button className="nav__buttons__login">Login</button>
        <button className="nav__buttons__signup" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </nav>
  );
}
