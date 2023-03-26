import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors';

export const RestrictedRoute = ({ element: Component, redirectTo = '/' }) => {
  const isLogedin = useSelector(authSelectors.getIsLoggedIn);

  return isLogedin ? <Navigate to={redirectTo} /> : <Component />;
};
