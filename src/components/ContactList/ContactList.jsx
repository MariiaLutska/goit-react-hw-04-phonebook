import { ContactItem } from '../ContactItem/ContactItem';
import { Box } from '../Box';

export const ContactList=({ contacts, onDeleteClick }) => {
  return (
    <Box color="secondary" as="ul">
      {contacts.map(item => (
        <ContactItem
          key={item.id}
          item={item}
          onDeleteClick={onDeleteClick} />
      ))}
    </Box>
  );
};