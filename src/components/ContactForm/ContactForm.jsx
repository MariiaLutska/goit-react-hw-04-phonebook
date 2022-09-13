import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Button } from './Button.styled';


let inputNameId = nanoid();
let inputTelId = nanoid();

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setId(nanoid());

    if (name === 'name') {
      return setName(value);
    } else if (name === 'number') {
      return setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let contactsData = { name, number, id };

    onSubmit(contactsData);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };
  

  return (
<Box display="flex">
      <form onSubmit={handleSubmit}>
        <Box display="flex"
          flexDirection="column" >
          <label htmlFor={inputNameId}>
            Name:
          </label>
          <input
          onInput={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={inputNameId}
        />
          {/* <ErrorMessage name="name" component="div" /> */}
                
          <label htmlFor={inputTelId}>
            Number:
          </label>
         <input
          onInput={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputTelId}
        />
          {/* <ErrorMessage name="number" component="div" /> */}
                
          <Button type="submit">
            Add contact
          </Button>
        </Box>
      </form>
    </Box>
  );
};
