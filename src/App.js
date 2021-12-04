import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
// import Form from './components/Form';
// import Section from './components/Section';
// import ContactsList from './components/ContactsList';
// import Filter from './components/Filter';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Loader from './components/Loader';
import { fetchContacts } from './redux/contacts/contacts-operations';
import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.contacts.loading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className={s.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
