import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Box } from './Box';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contact')) ?? '',
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  

  const onSubmit = data => {
    let findName = contacts.find(item => item.name === data.name);

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      setContacts(contacts => [...contacts, data]);
    }
  };

  const onFilter = e => {
   setFilter(e.target.value);
  };

  const handleClickDeleteBtn = id => {
    setContacts(prevState => prevState.contacts.filter(contact => contact.id !== id),
    );
  };

  const getVisibleContacts = () => {
    const filterTolowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterTolowerCase)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {

  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // render() {
  //   const { filter } = this.state;
  let visibleContacts = [];
  visibleContacts = getVisibleContacts();

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
          <ContactForm onSubmit={onSubmit} />
          </Section>
  
        <Section title="Contacts">
          <Filter value={filter} onChange={onFilter} />
          

        <ContactList
          contacts={visibleContacts}
            onDeleteClick={handleClickDeleteBtn} />
          </Section>
      </Box>
    );
 };
// }