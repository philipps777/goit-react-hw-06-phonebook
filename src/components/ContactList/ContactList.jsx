import { useSelector } from 'react-redux';

import { getContactsFilter, getContactsList } from 'redux/selectors';

import { List } from './ContactList.styled';

import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
// import { List } from './ContactList.styled';
// import { ContactItem } from './ContactItem';

// export const ContactList = ({ contacts, onDelete }) => (
//   <List>
//     {contacts.map(contact => (
//       <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
//     ))}
//   </List>
// );
