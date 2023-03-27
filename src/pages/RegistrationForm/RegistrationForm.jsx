import { Button, TextField } from '@mui/material';
import { Form, Label } from 'pages/Phonebook/Phonebook.style';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operetion';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextField
          type="text"
          name="name"
          fullWidth
          label="Username"
          id="Username"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <TextField
          type="email"
          name="email"
          fullWidth
          label="Email"
          id="Email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
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
        Register
      </Button>
    </Form>
  );
};
