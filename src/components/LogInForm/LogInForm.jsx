// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { Form, Label } from 'pages/Phonebook/Phonebook.style';

export const LogInForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <TextField
          type="email"
          name="email"
          fullWidth
          label="Email"
          id="Email"
        />
      </Label>
      <Label>
        <TextField
          type="password"
          name="password"
          label="Password"
          id="Password"
        />
      </Label>
      <Button type="submit" style={{ marginTop: 20 }} variant="contained">
        Log In
      </Button>
    </Form>
  );
};
