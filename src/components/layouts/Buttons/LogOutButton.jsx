import authSelectors from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operetion';
import Button from '@mui/material/Button';

export default function LogOutButton() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end ',
      }}
    >
      {name !== null && (
        <p
          style={{ fontWeight: 500, fontSize: 18, paddingRight: 8 }}
        >{`${name}`}</p>
      )}

      <Button type="Button" style={{}} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
