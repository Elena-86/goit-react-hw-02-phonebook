import { Component } from 'react';

import { MainContainer } from './App.styled';
import ContactsForm from '../ContactsForm';
import ContactsList from '../ContactsList';
import ContactsFilter from '../ContactsFilter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckContactUnicity = name => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert(`${name} is already in contacts!`);
    return !isExistContact;
  };

  handleDeleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleContactsFilterChange = filter => this.setState({ filter });

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();

    return (
      <MainContainer>
        <h2>Phonebook</h2>
        <ContactsForm
          onAdd={this.handleAddContact}
          onCheckUnicity={this.handleCheckContactUnicity}
        />
        <h3>Contacts</h3>
        <ContactsFilter
          filter={filter}
          onChange={this.handleContactsFilterChange}
        />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.handleDeleteContact}
        />
      </MainContainer>
    );
  }
}
