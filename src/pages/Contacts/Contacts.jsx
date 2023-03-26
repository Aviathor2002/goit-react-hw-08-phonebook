import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Conteiner } from './Contacts.style';

export const Contacts = () => {
  // const contactFilter = useSelector(getFilter);
  // const { data: contacts, isFetching } = useGetContactsListQuery();

  // const contactsList =
  //   contactFilter !== ''
  //     ? contacts.filter(item =>
  //         item.name.toLowerCase().includes(contactFilter.toLowerCase())
  //       )
  //     : contacts;

  return (
    <Conteiner>
      <Filter />
      <ContactsList />
    </Conteiner>
  );
};
