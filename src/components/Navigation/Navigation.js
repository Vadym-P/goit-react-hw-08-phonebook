import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={s.wrapper}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className={s.auth}>
        <li className={s.item}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Login
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Registration
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
