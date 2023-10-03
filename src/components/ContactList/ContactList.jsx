import { useSelector } from 'react-redux';

import { getContactsFilter, getContactsList } from 'redux/selectors';

import { List } from './ContactList.styled';

import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);

  const visibleContacts = contacts.filter(contact => {
    const name = contact.name || '';
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
