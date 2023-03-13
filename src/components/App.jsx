import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { MainContainer, Title } from './App.style';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContacts, remove } from './redux/contacts';
import { getFilter, setFilter } from './redux/filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const reviseExistName = person => {
    return contacts.some(
      contact => contact.name.toLowerCase() === person.toLowerCase()
    );
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

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = id => {
    dispatch(remove(id));

    return contacts;
  };

  const filterContacts = getFilterContacts();

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Phonebook onSubmitAccept={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contactsList={filterContacts} receiveID={removeContact} />
    </MainContainer>
  );
};
