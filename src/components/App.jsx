import { Wrapper } from 'components/App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
