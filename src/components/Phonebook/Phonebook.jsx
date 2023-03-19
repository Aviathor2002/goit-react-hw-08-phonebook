import { useState } from 'react';
import { Form, Label, Button } from './Phonebook.style';
import { add, getContacts } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    reset();
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (reviseExistName(name)) {
      return alert(`Sorry, but ${contact.name} is already in contacts`);
    }

    dispatch(add(contact));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const reviseExistName = person => {
    return contacts.some(
      contact => contact.name.toLowerCase() === person.toLowerCase()
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          value={name}
          onChange={handleInputNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          value={number}
          onChange={handleInputNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" style={{ marginTop: 20 }}>
        Add contact
      </Button>
    </Form>
  );
};
