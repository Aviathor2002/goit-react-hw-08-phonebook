import { Form, Label } from './Phonebook.style';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { contactsOperations } from 'redux/contacts/contactsOperatoins';
import { useDispatch, useSelector } from 'react-redux';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target.elements;

    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${target.name.value} is already in contacts. Please try again`);

      return;
    }

    const formDatas = {
      name: target.name.value,
      number: target.number.value,
    };

    dispatch(contactsOperations.addContact(formDatas));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleInputNameChange = e => {
  //   setName(e.currentTarget.value);
  // };

  // const handleInputNumberChange = e => {
  //   setNumber(e.currentTarget.value);
  // };

  // const confirmAddContact = ({ name, number }) => {
  //   Notiflix.Confirm.show(
  //     'Confirm adding contact',
  //     `Do you want add ${name} to your contacts?`,
  //     'Yes',
  //     'No',
  //     () => {
  //       addContact({ name, number });
  //     },
  //     () => {
  //       return;
  //     }
  //   );
  // };

  // const { data: contacts } = useGetContactsListQuery();

  // const [contactPost, { isLoading: isPosting, isSuccess }] =
  //   usePostContactsListMutation();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   confirmAddContact({ name, number });
  //   reset();
  // };

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //   };

  //   if (reviseExistName(name)) {
  //     return Notiflix.Report.warning(
  //       'Warning!',
  //       ` ${contact.name} is already in contacts`
  //     );
  //   }

  //   try {
  //     contactPost(contact);
  //     Notiflix.Notify.success(`${name} added to contacs`);
  //   } catch (error) {
  //     Notiflix.Notify.failure(
  //       ` Oops, someting went wrong, try again later! ${error}`
  //     );
  //   }
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  // const reviseExistName = person => {
  //   return contacts.some(
  //     contact => contact.name.toLowerCase() === person.toLowerCase()
  //   );
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <TextField
          fullWidth
          label="Name"
          id="Name"
          // value={name}
          // onChange={handleInputNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <TextField
          fullWidth
          label="Number"
          id="Number"
          // value={number}
          // onChange={handleInputNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button
        type="submit"
        style={{ marginTop: 20 }}
        // disabled={isPosting}
        variant="contained"
      >
        Add contact
        {/* {isPosting ? 'Adding...' : ' Add contact'} */}
      </Button>

      {/* {isSuccess && <Navigate to="/" replace />} */}
    </Form>
  );
};
