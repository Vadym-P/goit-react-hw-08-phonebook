import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './LoginPage.module.css';

const initialState = {
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, [action.type]: action.payload };
    case 'password':
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(reducer, initialState);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(state));
  };

  return (
    <>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name__input}>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            title="Введите Ваш email"
            placeholder="Enter email"
            required
            value={state.email}
            onChange={event =>
              setState({ type: event.target.name, payload: event.target.value })
            }
          />
        </label>
        <label className={s.label}>
          <span className={s.name__input}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            title="Введите Ваш пароль"
            placeholder="Enter password"
            required
            value={state.password}
            onChange={event =>
              setState({ type: event.target.name, payload: event.target.value })
            }
          />
        </label>
        <button type="submit" className={s.add__btn}>
          Login
        </button>
      </form>
    </>
  );
}
