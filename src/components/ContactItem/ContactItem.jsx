import React from 'react';
import { Box } from '../Box';
import { Button } from '../ContactForm/Button.styled';


export const ContactItem = ({ item, onDeleteClick }) => {
  return (
    <Box color="primary" as="li">
      {item.name} : {item.number}
      <Button
        type="button"
        onClick={() => onDeleteClick(item.id)}
      >
        Delete
      </Button>
    </Box>
  );
};