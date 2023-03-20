import { List, Item, Text, Button } from './Contacts.style';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import {
  useGetContactsListQuery,
  useDeleteContactsListMutation,
} from 'redux/contacts';
import Notiflix from 'notiflix';

export const Contacts = () => {
  const contactFilter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsListQuery();

  const [contactDelete, { isLoading: isDeleting }] =
    useDeleteContactsListMutation();

  const contactsList =
    contactFilter !== ''
      ? contacts.filter(item =>
          item.name.toLowerCase().includes(contactFilter.toLowerCase())
        )
      : contacts;

  return (
    <List>
      {isFetching &&
        Notiflix.Loading.standard('Loading...', {
          backgroundColor: 'rgba(0,0,0,0.8)',
        })}
      {!isFetching && Notiflix.Loading.remove()}
      {contactsList &&
        contactsList.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Button onClick={() => contactDelete(id)} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Remove'}
              </Button>
              {/* {isDeleted && Notiflix.Notify.failure(`${name} deleted`)} */}
            </Item>
          );
        })}
    </List>
  );
};
