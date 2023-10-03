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
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Wrapper } from 'components/App.styled';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');

//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleAddContact = newContact => {
//     const { contacts } = this.state;
//     const contactWithId = { ...newContact, id: nanoid() };

//     if (
//       contacts.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in your contacts.`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contactWithId],
//     }));
//   };

//   handleFilterChange = filterValue => {
//     this.setState({ filter: filterValue });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   handleDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <Wrapper>
//         <h2>Phonebook</h2>
//         <ContactForm onAdd={this.handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           onDelete={this.handleDeleteContact}
//         />
//       </Wrapper>
//     );
//   }
// }
