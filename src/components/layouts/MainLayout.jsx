import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Buttons/Navigation';
// import { RegistrationButton } from './Buttons/RegistrationButton';

export const MainLayout = () => {
  return (
    <>
      <Navigation />
      {/* <RegistrationButton /> */}
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
