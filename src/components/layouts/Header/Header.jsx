import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';
import { LogInButton } from '../Buttons/LogInButton';
import LogOutButton from '../Buttons/LogOutButton';
import { RegistrationButton } from '../Buttons/RegistrationButton';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <section>
      {!isLoggedIn ? (
        <>
          <LogInButton /> <RegistrationButton />
        </>
      ) : (
        <LogOutButton />
      )}
    </section>
  );
};
