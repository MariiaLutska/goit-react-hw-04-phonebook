import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Box } from './Box';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  

  const handleSubmit = data => {
    let findName = contacts.find(item => item.name === data.name);

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      setContacts(contact => [...contact, data]);
    }
  };

  const handleFilter = e => {
   setFilter(e.target.value);
  };

  const handleClickDeleteBtn = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id),
    );
  };

  const getVisibleContacts = () => {
    const filterTolowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterTolowerCase)
    );
  };

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
          <ContactForm onSubmit={handleSubmit} />
          </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={handleFilter} />
          
          <ContactList
            contacts={visibleContacts}
          onDeleteClick={handleClickDeleteBtn} 
          />

        </Section>
      </Box>

    );

};
