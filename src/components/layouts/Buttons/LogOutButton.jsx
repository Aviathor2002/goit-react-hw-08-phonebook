import authSelectors from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operetion';

export default function LogOutButton() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      {name !== null && <p>{`Welcome,  ${name}`}</p>}

      <button type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </>
  );
}
