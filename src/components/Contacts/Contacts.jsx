import { List, Item, Text, Button } from './Contacts.style';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';
import {
  useGetContactsListQuery,
  useDeleteContactsListMutation,
} from 'redux/contacts';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contactFilter = useSelector(getFilter);
  const { data: contacts, error, isLoading } = useGetContactsListQuery();

  const [contactDelete, { isLoading: isDeleting }] =
    useDeleteContactsListMutation();

  console.log(contacts);

  const contactsList =
    contactFilter !== ''
      ? contacts.filter(item =>
          item.name.toLowerCase().includes(contactFilter.toLowerCase())
        )
      : contacts;

  console.log(contactsList);

  return (
    <List>
      {contactsList &&
        contactsList.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Button onClick={() => contactDelete(id)}>
                {isDeleting ? 'Deleting...' : 'Remove'}
              </Button>
            </Item>
          );
        })}
    </List>
  );
};
