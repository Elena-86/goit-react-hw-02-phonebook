import { LisContainer, ListItem } from './ContactsList.styled';
const ContactsListElement = ({ id, name, phone, onDelete }) => {
  return (
    <ListItem>
      {name}: {phone} <button onClick={() => onDelete(id)}>Delete</button>
    </ListItem>
  );
};

const ContactsList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <LisContainer>
      {contacts.map(contact => (
        <ContactsListElement {...contact} onDelete={onDelete} />
      ))}
    </LisContainer>
  );
};
export default ContactsList;
