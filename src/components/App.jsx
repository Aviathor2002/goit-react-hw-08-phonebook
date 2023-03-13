import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { MainContainer, Title } from './App.style';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './redux/contacts';
import { setFilter } from './redux/filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
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
