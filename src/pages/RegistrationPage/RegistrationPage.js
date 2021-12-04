import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/auth-operations';
import s from './RegistrationPage.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, [action.type]: action.payload };
    case 'email':
      return { ...state, [action.type]: action.payload };
    case 'password':
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
}

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(reducer, initialState);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registration(state));
  };

  return (
    <>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name__input}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире
          и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de
          Castelmore d'Artagnan и т. п."
            placeholder="Enter name"
            required
            value={state.name}
            onChange={event =>
              setState({ type: event.target.name, payload: event.target.value })
            }
          />
        </label>
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
            placeholder="Create a password"
            required
            value={state.password}
            onChange={event =>
              setState({ type: event.target.name, payload: event.target.value })
            }
          />
        </label>
        <button type="submit" className={s.add__btn}>
          Registration
        </button>
      </form>
    </>
  );
}
