import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactSlice';

import { Li, ButtonList, Number } from './ContactList.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <Li key={id}>
      {name}:<Number>{number}</Number>
      <ButtonList onClick={() => handleDeleteContact(id)}>Delete</ButtonList>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

// import { Li, ButtonList, Number } from './ContactList.styled';
// export const ContactItem = ({ contact, onDelete }) => (
//   <Li>
//     {contact.name}: <Number>{contact.number}</Number>
//     <ButtonList onClick={() => onDelete(contact.id)}>Delete</ButtonList>
//   </Li>
// );
