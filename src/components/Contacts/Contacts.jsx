import { List, Item, Text, Button } from './Contacts.style';
import { remove, getContacts } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);

  const removeContact = id => {
    dispatch(remove(id));
  };

  const contactsList =
    contactFilter !== ''
      ? contacts.filter(item =>
          item.name.toLowerCase().includes(contactFilter.toLowerCase())
        )
      : contacts;

  console.log(contactsList);

  return (
    <List>
      {contactsList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button
              onClick={() => {
                removeContact(id);
              }}
            >
              Remove
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
