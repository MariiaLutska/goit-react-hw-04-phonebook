import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = data => {
    let findName = this.state.contacts.find(item => item.name === data.name);

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, data],
      }));
    }
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleClickDeleteBtn = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterTolowerCase = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterTolowerCase)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box
      display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       border="normal"
       background="lightyellow"
     width="50%">
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
          </Section>
  
        <Section title="Contacts">
          <Filter value={filter} onChange={this.onFilter} />
          

        <ContactList
          contacts={visibleContacts}
            onDeleteClick={this.handleClickDeleteBtn} />
          </Section>
      </Box>
    );
  }
}