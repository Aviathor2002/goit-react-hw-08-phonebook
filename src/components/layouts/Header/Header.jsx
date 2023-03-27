import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';
import { LogInButton } from '../Buttons/LogInButton';
import LogOutButton from '../Buttons/LogOutButton';
import { RegistrationButton } from '../Buttons/RegistrationButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <Box
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
              <RegistrationButton />
            </Button>
            <Button>
              <LogInButton />
            </Button>
          </ButtonGroup>
        </Box>
      ) : (
        <Box
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',

            alignItems: 'flex-end',
            '& > *': {
              m: 1,
            },
          }}
        >
          <LogOutButton />
        </Box>
      )}
    </>
  );
};
