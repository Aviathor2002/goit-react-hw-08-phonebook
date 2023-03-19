import { Phonebook } from './Phonebook/Phonebook';

import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { MainContainer, Title } from './App.style';

export const App = () => {
  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <Phonebook />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </MainContainer>
  );
};
