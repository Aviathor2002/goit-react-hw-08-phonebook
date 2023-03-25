import { LogInButton } from '../Buttons/LogInButton';
import { RegistrationButton } from '../Buttons/RegistrationButton';

export const Header = () => {
  return (
    <section>
      <RegistrationButton />
      <LogInButton />
    </section>
  );
};
