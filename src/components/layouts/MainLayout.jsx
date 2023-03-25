import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Buttons/Navigation';
import { Header } from './Header/Header';
// import { RegistrationButton } from './Buttons/RegistrationButton';

export const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
