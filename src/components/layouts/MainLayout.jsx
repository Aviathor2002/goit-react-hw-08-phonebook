import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Buttons/Navigation';

export const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>

      <Navigation />
    </>
  );
};
