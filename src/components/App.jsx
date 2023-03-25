import { Phonebook } from '../pages/Phonebook/Phonebook';
import { Routes, Route } from 'react-router-dom';
// import { Filter } from './Filter/Filter';
import { Contacts } from 'pages/Contacts/Contacts';
import { MainContainer } from './App.style';
import { MainLayout } from './layouts/MainLayout';
import { ContactProfile } from 'pages/ContactProfile/ContactProfile';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LogInForm } from './LogInForm/LogInForm';

export const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Contacts />} />
          <Route path={'/addContact'} element={<Phonebook />} />
          <Route path={'/:id'} element={<ContactProfile />} />
          <Route path={'/registration'} element={<RegistrationForm />} />
          <Route path={'/login'} element={<LogInForm />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};
