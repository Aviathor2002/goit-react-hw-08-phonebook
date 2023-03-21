import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import { useGetContactsListQuery } from 'redux/contacts';
import Notiflix from 'notiflix';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Conteiner } from './Contacts.style';

export const Contacts = () => {
  const contactFilter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsListQuery();

  const contactsList =
    contactFilter !== ''
      ? contacts.filter(item =>
          item.name.toLowerCase().includes(contactFilter.toLowerCase())
        )
      : contacts;

  return (
    <Conteiner>
      <Filter />

      {isFetching &&
        Notiflix.Loading.standard('Loading...', {
          backgroundColor: 'rgba(0,0,0,0.8)',
        })}
      {!isFetching && Notiflix.Loading.remove()}
      {contactsList && <ContactsList list={contactsList} />}
    </Conteiner>
  );
};
