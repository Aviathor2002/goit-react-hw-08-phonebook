import { Link } from 'react-router-dom';

export const RegistrationButton = () => {
  return (
    <div>
      <Link
        to={'/registration'}
        style={({ isActive }) => {
          if (isActive) return { color: 'purple' };
        }}
      >
        {' '}
        Rgistration{' '}
      </Link>
    </div>
  );
};
