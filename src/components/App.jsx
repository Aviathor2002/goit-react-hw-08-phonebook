import { useState, useEffect } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { MainContainer, Title } from './App.style';

export const App = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(() => localContacts ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

    setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));

    return contacts;
  };

  const filterContacts = getFilterContacts();

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Phonebook onSubmitAccept={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={filterContacts} receiveID={removeContact} />
    </MainContainer>
  );
};
