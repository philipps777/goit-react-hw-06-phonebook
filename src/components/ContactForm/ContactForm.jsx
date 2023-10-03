import { useSelector, useDispatch } from 'react-redux';

import { getContactsList } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

import { Form, FormWrapper, Button, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    dispatch(addContact(formName, formNumber));
    form.reset();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />

        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.number}
        />

        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
};

// import { Form, FormWrapper, Button, Input } from './ContactForm.styled';
// import { Component } from 'react';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     onAdd({ name, number });
//     this.setState({ name: '', number: '' });
//   };

//   handleInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <FormWrapper>
//         <Form onSubmit={this.handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             value={name}
//             onChange={this.handleInputChange}
//             required
//           />
//           <Input
//             type="text"
//             name="number"
//             value={number}
//             onChange={this.handleInputChange}
//             required
//           />
//           <Button type="submit">Add Contact</Button>
//         </Form>
//       </FormWrapper>
//     );
//   }
// }
