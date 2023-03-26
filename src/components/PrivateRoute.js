import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors';

export const PrivateRoute = ({ element: Component, redirectTo = '/login' }) => {
  const isLogedin = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLogedin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
