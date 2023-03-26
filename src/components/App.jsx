import { Phonebook } from '../pages/Phonebook/Phonebook';
import { Routes, Route } from 'react-router-dom';
// import { Filter } from './Filter/Filter';
import { Contacts } from 'pages/Contacts/Contacts';
import { MainContainer } from './App.style';
import { MainLayout } from './layouts/MainLayout';
// import { ContactProfile } from 'pages/ContactProfile/ContactProfile';
import { RegistrationForm } from '../pages/RegistrationForm/RegistrationForm';
import { LogInForm } from '../pages/LogInForm/LogInForm';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth/operetion';
import { RestrictedRoute } from './RestrictedRoute';
// import authSelectors from 'redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  // const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <MainContainer>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<PrivateRoute element={Contacts} />} />
          <Route
            path={'/addContact'}
            element={<PrivateRoute element={Phonebook} />}
          />
          {/* <Route path={'/:id'} element={<ContactProfile />} /> */}
          <Route
            path={'/registration'}
            element={<RestrictedRoute element={RegistrationForm} />}
          />
          <Route
            path={'/login'}
            element={<RestrictedRoute element={LogInForm} />}
          />
        </Route>
      </Routes>
    </MainContainer>
  );
};
