import PropTypes from 'prop-types';
import { LisContainer, ListItem } from './ContactsList.styled';
const ContactsListElement = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      {name}: {number} <button onClick={() => onDelete(id)}>Delete</button>
    </ListItem>
  );
};

const ContactsList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <LisContainer>
      {contacts.map(contact => (
        <ContactsListElement
          key={contact.id}
          {...contact}
          onDelete={onDelete}
        />
      ))}
    </LisContainer>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDelete: PropTypes.func.isRequired,
    }),
  ),
};
export default ContactsList;
